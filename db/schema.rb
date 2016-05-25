# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160524232505) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campaign_users", force: :cascade do |t|
    t.integer  "campaign_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "campaign_users", ["campaign_id"], name: "index_campaign_users_on_campaign_id", using: :btree
  add_index "campaign_users", ["user_id"], name: "index_campaign_users_on_user_id", using: :btree

  create_table "campaigns", force: :cascade do |t|
    t.string  "name"
    t.integer "game_master_id"
    t.text    "campaign_type"
    t.text    "description"
    t.string  "uuid"
  end

  add_index "campaigns", ["game_master_id"], name: "index_campaigns_on_game_master_id", using: :btree
  add_index "campaigns", ["uuid"], name: "index_campaigns_on_uuid", unique: true, using: :btree

  create_table "characters", force: :cascade do |t|
    t.integer "user_id"
    t.integer "campaign_id"
    t.string  "name"
    t.string  "age"
    t.text    "description"
    t.text    "bio"
    t.text    "notes"
    t.integer "species_id"
    t.integer "brawn"
    t.integer "agility"
    t.integer "intellect"
    t.integer "cunning"
    t.integer "willpower"
    t.integer "presence"
    t.integer "exp_total"
    t.integer "exp_remaining"
  end

  add_index "characters", ["campaign_id"], name: "index_characters_on_campaign_id", using: :btree
  add_index "characters", ["species_id"], name: "index_characters_on_species_id", using: :btree
  add_index "characters", ["user_id"], name: "index_characters_on_user_id", using: :btree

  create_table "skills", force: :cascade do |t|
    t.string  "name"
    t.string  "characteristic"
    t.integer "skill_type"
    t.text    "description"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
