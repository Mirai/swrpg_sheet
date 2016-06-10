module Api
  class CharactersController < ApplicationController
    def index
      #@characters = current_user.charactes
      @characters = Character.all
      render json: @characters
    end

    def show
      @character = Character.find(params[:id])
      render json: @character
    end

    def create
    end

    def update
    end

    def destroy
    end
  end
end
