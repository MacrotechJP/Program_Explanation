Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "program#index" #サイトのプログラミング言語選択ページ
  get "/Java",to:"java#index" #Javaのトップページ
  get "/Ruby",to:"ruby#index" #Rubyのトップページ
  get "/Ruby/framework/Rails",to:"ruby#rails_index" #Rubyフレームワーク「Rails」のトップページ
  get "/Ruby/framework/Rails/devise",to:"ruby#rails_3-2" #Rubyフレームワーク「Rails」のgem「一覧」「devise」
  get "/AWS",to:"aws#index" #AWSのトップページ
end
