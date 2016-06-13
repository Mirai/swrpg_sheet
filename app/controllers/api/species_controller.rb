module Api
  class SpeciesController < BaseController
    def index
      @species = Species.all
      render json: @species
    end
  end
end
