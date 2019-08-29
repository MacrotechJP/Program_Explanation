#ElasticIP
3.114.230.22
#AmazonLinuxログインコマンド
cd .ssh/
ssh -i engineer_koyo.pem ec2-user@3.114.230.22
#AmazonLinuxコマンド
sudo service mysqld start(MySQL起動)
sudo service mysqld status(MySQL起動確認)
sudo vim /etc/environment(環境変数設定ファイル)
env | grep DATABASE_PASSWORD(DATEBASE_PASSWORD確認)
env | grep SECRET_KEY_BASE(SEACET_KEY_BASE確認)
less log/unicorn.stderr.log(unicorn関係で起きたエラーをみる)
git pull origin master(ローカルでの編集をサーバ上のアプリケーションにも反映)
unicorn_rails -c config/unicorn.rb -E production -D(ユニコーン起動)
ps aux | grep unicorn(unicorn関連のプロセスのみを抽出)
kill -9 <確認したunicorn rails masterのPID>(現在動いているプロセスを停止させる)
tail -f log/unicorn.stdout.log(正常に動いている際のログを確認)
sudo service nginx restart(Nginxを再起動して設定ファイルを再読み込み)
bundle exec cap production deploy(自動デプロイ)
#MySQLパスワード
koyotanaka

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
