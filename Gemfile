source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
end

# Windows 和 JRuby 不支持 tzinfo-data
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# 性能提升
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# 锁定 http_parser.rb gem 到 v0.6.x
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
