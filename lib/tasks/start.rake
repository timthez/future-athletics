namespace :start do
  task :development do
    exec 'foreman start -f Procfile.dev'
  end

  desc 'Start production server'
  task :production do
    exec 'NPM_CONFIG_PRODUCTION=true npm run postinstall && foreman start'
  end
end

namespace :dev do
  task :setup do
    exec "bundle install"
    exec "cd ./_react yarn install"
  end
end

desc 'Start development server'
task :start => 'start:development'