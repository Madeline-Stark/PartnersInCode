class Api::ProgrammersController < ApplicationController

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

  private

  def programmer_params
    params.require(:programmer).permit(:name, :email, :languages, :time_zone)
  end

end
