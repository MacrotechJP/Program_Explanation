Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "program#index" #サイトのプログラミング言語選択ページ
  get "/Java",to:"java#index" #Javaのトップページ
end
