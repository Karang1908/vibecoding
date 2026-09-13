def on_page_markdown(markdown, page, config, files):
    locks = config.get('extra', {}).get('locks', {})
    src_path = page.file.src_path.replace('\\', '/')
    
    if src_path.startswith('day-2-new/') and locks.get('day_1', False):
        return """# Day 1: Build Your Idea

<div class="admonition warning">
  <p class="admonition-title">This session hasn't started yet.</p>
  <p>Tomorrow, we'll go from an idea to a working application. You'll learn how to give AI the context it needs, build step by step, and verify what it creates.</p>
  <p><em>Full Day 1 guide will unlock after the session.</em></p>
</div>
"""
    
    if src_path.startswith('day-3-new/') and locks.get('day_2', False):
        return """# Day 2: Make It Real

<div class="admonition warning">
  <p class="admonition-title">Coming soon.</p>
  <p>We'll take what we build and turn it into something real.</p>
  <p><em>The full Day 2 guide will unlock after the session.</em></p>
</div>
"""
    
    if src_path.startswith('post-workshop/') and locks.get('post_workshop', False):
        return """# Beyond Vibe Coding 101

<div class="admonition info">
  <p class="admonition-title">Coming soon.</p>
  <p>Resources, next steps, and ways to keep building after the workshop.</p>
</div>
"""
    
    return markdown


def on_nav(nav, config, files):
    locks = config.get('extra', {}).get('locks', {})
    
    def process_items(items):
        for item in items:
            if hasattr(item, 'title') and item.title:
                if "Day 1:" in item.title and locks.get('day_1', False):
                    item.title = item.title + " 🔒"
                elif "Day 2:" in item.title and locks.get('day_2', False):
                    item.title = item.title + " 🔒"
                elif "Post-Workshop:" in item.title and locks.get('post_workshop', False):
                    item.title = item.title + " 🔒"
            if hasattr(item, 'children') and item.children:
                process_items(item.children)
                
    if nav and nav.items:
        process_items(nav.items)
