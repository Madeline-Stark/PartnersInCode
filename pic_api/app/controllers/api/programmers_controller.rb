class Api::ProgrammersController < ApplicationController
before_action :set_programmer, only: [:show, :edit, :destroy]
#don't need new or edit-handled on server side

  def index
    @programmers = Programmer.all
    render json: @programmers
  end

  def create
    @programmer = Programmer.new(programmer_params)
    if @programmer.save
      render json: @programmer
    else
      render json: { errors: {message: 'Problem saving, try again.'}}
    end
  end

  def show
    render json: @programmer
  end

  def update
    if @programmer.update(programmer_params)
      render json: @programmer
    else
      render json: { errors: {message: 'Problem saving, try again.'}}
    end
  end

  def destroy
    if @programmer.destroy
      render json: { message: 'Deleted forever!'}
    else
      render json: { errors: {message: 'Problem deleting, try again.'}}
    end
  end

  private

  def set_programmer
    @programmer = Programmer.find_by(id: params[:id])
  end

  def programmer_params
    params.require(:programmer).permit(:name, :email, :languages, :time_zone)
  end

end
