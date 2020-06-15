class SetCoordinatesController < ApplicationController

  def return_cities

    latitude = params[:data.latitude]
    longitude = params[:data].longitude

    uri = URI.parse("https://api.geodatasource.com/cities?key=AIW5ZMXNJQAHQF295JP6LMKMY7F1TGDM&format=json&lat=#{ latitude }&lng=#{ longitude }")
    data = Net::HTTP.get(uri)

    render json: data
  end
end
