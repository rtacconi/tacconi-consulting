# Tacconi Consulting site — run with: just [recipe]
# List recipes: just --list

default:
    just --list

# Serve the site at http://localhost:8000 (Ctrl+C to stop)
preview:
    python3 -m http.server 8000

# Alias for preview
serve: preview
