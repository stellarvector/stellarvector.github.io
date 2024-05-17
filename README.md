# Stellar Vector website

## Running locally

It should be as easy as (you might need to use sudo):

0. (Optionally: execute `bundle config path 'vendor/bundle'` to install gems locally)
1. `bundle install`
2. `bundle exec jekyll serve`
3. go to http://127.0.0.1:4000/

Using Docker:
```bash
docker run --rm --volume="$PWD:/srv/jekyll" --volume="$PWD/vendor/bundle:/usr/local/bundle" --env JEKYLL_ENV=development -p 4000:4000 jekyll/jekyll:4 jekyll serve
```