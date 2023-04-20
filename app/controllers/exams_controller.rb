class ExamsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @exams = Exam.all
    # if no exams return json message of no exams
    if @exams.empty?
      render json: {message: "No exams found"}
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
      render json: {message: "Exam created"}
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
      render json: {message: "Exam not found"}
    end
    @exam.destroy
    render json: {message: "Exam deleted"}
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




  private
  def exam_params
    params.permit(:title, :description, :user_id, :public, :price, :pass_percentage, :time_limit)
  end
end
