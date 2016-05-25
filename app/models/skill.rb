class Skill < ActiveRecord::Base
  enum skill_type: [ :general, :combat, :knowledge ]
end
