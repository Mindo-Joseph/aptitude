class AttemptsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @attempts = Attempt.all
    # if no attempts return json message of no attempts
    if @attempts.empty?
      render json: {message: "No attempts found"}
    else
      render json: @attempts
    end
  end

  def show
    @attempt = Attempt.find(params[:id])
    render json: @attempt
  end

  def create
    @attempt = Attempt.create(attempt_params)
    if @attempt.save
      # return a json message of attempt created
      render json: {message: "Attempt created"}
    else
      render json: @attempt.errors
    end
  end

  def update
    @attempt = Attempt.find(params[:id])
    if @attempt.update(attempt_params)
      render json: @attempt
    else
      render json: @attempt.errors
    end
  end

  private
  def attempt_params
    params.permit(:user_id, :exam_id, :start_time, :end_time, :score, :result)
  end
end
