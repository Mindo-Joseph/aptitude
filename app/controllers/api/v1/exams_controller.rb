require "signet/oauth_2/client"

module API
  module V1
    class ExamsController < ApplicationController
      skip_before_action :verify_authenticity_token

      def index
        @exams = Exam.all
        # if no exams return json message of no exams
        if @exams.empty?
          render json: { message: "No exams found" }
        else
          render json: @exams
        end
      end

      def show
        @exam = Exam.find(params[:id])
        render json: @exam
      end

      def create
        @exam = Exam.create(exam_params)
        if @exam.save
          # return a json message of exam created
          render json: { message: "Exam created" }
        else
          render json: @exam.errors
        end
      end

      def update
        @exam = Exam.find(params[:id])
        if @exam.update(exam_params)
          render json: @exam
        else
          render json: @exam.errors
        end
      end

      def destroy
        @exam = Exam.find(params[:id])
        if @exam.nil?
          render json: { message: "Exam not found" }
        end
        @exam.destroy
        render json: { message: "Exam deleted" }
      end

      def creator
        @exam = Exam.find(params[:id])
        @user = User.find(@exam.user_id)
        @profile = Profile.find(@user.id)
        render json: @profile
      end

      def public
        @exams = Exam.where(public: true)
        render json: @exams
      end

      def redirect
        client = Signet::OAuth2::Client.new(client_options)
        redirect_to client.authorization_uri.to_s, allow_other_host: true
      end

      # a function that is able to schedule the exam and integrate it with google calendar
      def schedule
        @exam = Exam.find(params[:id])
        @user = User.find(@exam.user_id)
        @profile = Profile.find(@user.id)
        @calendar = Google::Apis::CalendarV3::CalendarService.new

        key_file_content = File.read("/Users/joe/Downloads/apptitude-384113-5cdba50211ac.json")
        authorizer = Google::Auth::ServiceAccountCredentials.make_creds(json_key_io: StringIO.new(key_file_content), scope: "https://www.googleapis.com/auth/calendar.events")
        @calendar.authorization = authorizer
        # @calendar.authorization = Google::Auth.get_application_default(["https://www.googleapis.com/auth/calendar.events"])
        event = Google::Apis::CalendarV3::Event.new
        event.start = Google::Apis::CalendarV3::EventDateTime.new(date_time: params[:start])
        event.end = Google::Apis::CalendarV3::EventDateTime.new(date_time: params[:end])
        event.summary = @exam.title

        @calendar.insert_event("primary", event)
        render json: { message: "Exam scheduled" }
      end

      def callback
        client = Signet::OAuth2::Client.new(client_options)
        response = client.fetch_access_token!(code: params[:code])
        session[:authorization] = response
        redirect_to exams_path
      end

      private

      def exam_params
        params.permit(:title, :description, :user_id, :public, :price, :pass_percentage, :time_limit)
      end

      def client_options
        {
          client_id: ENV["google_oauth2_client_id"],
          client_secret: ENV["google_oauth2_client_secret"],
          authorization_uri: "https://accounts.google.com/o/oauth2/auth",
          token_credential_uri: "https://accounts.google.com/o/oauth2/token",
          scope: Google::Apis::CalendarV3::AUTH_CALENDAR,
          redirect_uri: "http://localhost:3000/",

        }
      end
    end
  end
end
