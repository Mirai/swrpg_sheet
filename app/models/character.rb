class Character < ActiveRecord::Base
  belongs_to :user
  belongs_to :campaign

  validates :name, presence: true
end
