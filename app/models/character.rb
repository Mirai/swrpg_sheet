class Character < ActiveRecord::Base
  belongs_to :user
  belongs_to :campaign
  belongs_to :species

  validates :name, presence: true
end
