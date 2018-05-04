class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  def constants
    render js: ERB.new(File.read(Rails.root.join("app","constants.js.erb"))).result(), layout: false
  end
end
