class Api::ProgrammersController < ApplicationController
  def index
    @programmers = Programmer.all
    render json: @programmers
  end
end
