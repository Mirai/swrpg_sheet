class CreateSpecies < ActiveRecord::Migration
  def change
    create_table :species do |t|
      t.string :name
      t.text :description
      t.text :physiology
      t.text :society
      t.text :homeworld
      t.text :language
      t.text :source_note
      t.integer :brawn
      t.integer :agility
      t.integer :intellect
      t.integer :cunning
      t.integer :willpower
      t.integer :presence
      t.integer :exp_starting
    end
  end
end
