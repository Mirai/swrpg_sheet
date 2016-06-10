module Api
  class SpeciesController < ActionController::Base
    def index
      @species = Species.all
      render json: @species
    end
  end
end
