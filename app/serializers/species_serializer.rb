class SpeciesSerializer < ActiveModel::Serializer
  attributes :id, :name, :brawn, :agility, :intellect, :cunning, :willpower, :presence, :exp_starting

  # apparently presence is a keyword and must be handled specially
  def presence
    object.presence
  end
end
