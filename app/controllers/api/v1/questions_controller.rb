module API
  module V1
    class QuestionsController < ApplicationController
      skip_before_action :verify_authenticity_token

      def index
        @questions = Question.all
        # if no questions return json message of no questions
        if @questions.empty?
          render json: { message: "No questions found" }
        else
          render json: @questions
        end
      end

      def show
        @question = Question.find(params[:id])
        render json: @question
      end

      def create
        @question = Question.create(question_params)
        if @question.save
          # return a json message of question created
          render json: { message: "Question created" }
        else
          render json: @question.errors
        end
      end

      def update
        @question = Question.find(params[:id])
        if @question.update(question_params)
          render json: @question
        else
          render json: @question.errors
        end
      end

      private

      def question_params
        params.permit(:exam_id, :text, :question_type, :options, :correct_option, :points)
      end
    end
  end
end
