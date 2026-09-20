import re
from datetime import datetime, timedelta

def update_blog():
    with open('src/data/blog.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # We will use regex to find all blog post objects and process them one by one.
    # A blog post starts with `{` followed by `slug:` and ends before the next `{ slug:` or the end of the array.
    
    posts = re.split(r'(?=\s*\{\s*slug:)', content)
    
    header = posts[0]
    post_chunks = posts[1:]
    
    current_date = datetime(2026, 9, 20)
    
    updated_chunks = []
    
    for i, chunk in enumerate(post_chunks):
        # Calculate date (2 posts per day)
        days_to_subtract = i // 2
        post_date = current_date - timedelta(days=days_to_subtract)
        date_str = post_date.strftime('%Y-%m-%d')
        
        # 1. Update the date
        chunk = re.sub(r"tarih:\s*'[^']+'", f"tarih: '{date_str}'", chunk)
        
        # 2. Add 'Kısaca: ' to the first paragraph if it doesn't start with it
        # The first paragraph usually looks like: { tip: 'p', metin: 'Some text...' }
        # Let's find the first occurrence of { tip: 'p', metin: '...' }
        def add_kisaca(match):
            text = match.group(1)
            if not text.startswith('Kısaca:') and not text.startswith('Özet:'):
                text = 'Kısaca: ' + text
            return f"tip: 'p',\n        metin:\n          '{text}'"
        
        # We only want to replace the FIRST paragraph.
        # It's tricky with regex, so let's do it with string split on the first paragraph.
        p_pattern = r"tip:\s*'p',\s*metin:\s*'([^']*)'"
        match = re.search(p_pattern, chunk)
        if match:
            text = match.group(1)
            if not text.startswith('Kısaca:') and not text.startswith('Özet:'):
                new_text = 'Kısaca: ' + text
                chunk = chunk[:match.start()] + f"tip: 'p',\n        metin:\n          '{new_text}'" + chunk[match.end():]
        
        # 3. Add a 'not' (Saha Tecrübesi) at the end of the govde if it doesn't exist.
        # Find the end of govde array: `    ],` before `baglantilar:`
        if "'not'" not in chunk:
            govde_end_pattern = r"(\s+)\],\s*baglantilar:"
            note_content = "Saha Tecrübesi: Denetimlerde ve uygulamalarda, yasal mevzuatın sadece evrak üzerinde değil, sahada fiilen uygulandığının kanıtlanması en kritik aşamadır. Tüm süreçlerin resmi olarak belgelendirilmesi olası idari para cezalarını engeller."
            note_snippet = f"\\1  {{\\1    tip: 'not',\\1    metin:\\1      '{note_content}',\\1  }},\\1],\n    baglantilar:"
            chunk = re.sub(govde_end_pattern, note_snippet, chunk)
            
        updated_chunks.append(chunk)

    final_content = header + ''.join(updated_chunks)
    
    with open('src/data/blog.ts', 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("Successfully updated dates and added AI optimization structures to all blog posts.")

if __name__ == '__main__':
    update_blog()
