class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :brawn, :agility, :intellect, :cunning, :willpower, :presence

  # apparently presence is a keyword and must be handled specially
  def presence
    object.presence
  end
end
