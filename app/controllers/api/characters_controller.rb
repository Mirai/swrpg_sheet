module Api
  class CharactersController < BaseController
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
      @character = Character.create(character_params)
      render json: @character
    end

    def update
      @character = Character.find(params[:id])
      @character.update(character_params)
      render json: @character
    end

    def destroy
    end

    private

    def character_params
      # fill this in later
      params.require(:character).permit!
    end
  end
end
