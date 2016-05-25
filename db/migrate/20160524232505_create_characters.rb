class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.belongs_to :user
      t.belongs_to :campaign
      t.string :name
      t.string :age
      t.text :description
      t.text :bio
      t.text :notes

      # Define the rest of your RPG systems main character
      # options here e.g. Attributes (Strength, Intelligence, etc)
      t.belongs_to :species
      t.integer :brawn
      t.integer :agility
      t.integer :intellect
      t.integer :cunning
      t.integer :willpower
      t.integer :presence
      t.integer :exp_total
      t.integer :exp_remaining
    end

    add_index :characters, :user_id
    add_index :characters, :campaign_id
    add_index :characters, :species_id
  end
end
