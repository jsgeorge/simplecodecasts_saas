class AddStripeCustomerTokenToUsers < ActiveRecord::Migration
  def change
    add_column :users, :stripe_stustomer_token, :string
  end
end
