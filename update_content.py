import re
import json

# We will modify the files using python string replacements to keep it safe.

with open('src/data/blog.ts', 'r', encoding='utf-8') as f:
    blog_content = f.read()

# Add more internal links to blog posts based on their categories/content
blog_replacements = [
    (
        "baglantilar: [\n      { metin: 'Tehlike sınıfı sorgulama aracı', href: '/araclar/tehlike-sinifi-sorgulama/' },\n      { metin: 'Yükümlülük hesaplama', href: '/araclar/isg-yukumluluk-hesaplama/' },\n    ],",
        "baglantilar: [\n      { metin: 'Tehlike sınıfı sorgulama aracı', href: '/araclar/tehlike-sinifi-sorgulama/' },\n      { metin: 'Yükümlülük hesaplama', href: '/araclar/isg-yukumluluk-hesaplama/' },\n      { metin: 'İş Güvenliği Uzmanlığı Hizmeti', href: '/hizmetler/is-guvenligi-uzmanligi/' },\n    ],"
    ),
    (
        "baglantilar: [\n      { metin: 'Risk değerlendirmesi hizmetimiz', href: '/hizmetler/risk-degerlendirmesi/' },\n      { metin: 'Sık sorulan sorular', href: '/sss/' },\n    ],",
        "baglantilar: [\n      { metin: 'Risk değerlendirmesi hizmetimiz', href: '/hizmetler/risk-degerlendirmesi/' },\n      { metin: 'Acil Durum Eylem Planı', href: '/hizmetler/acil-durum-eylem-plani/' },\n      { metin: 'Sık sorulan sorular', href: '/sss/' },\n    ],"
    ),
    (
        "baglantilar: [\n      { metin: 'Risk değerlendirmesi', href: '/hizmetler/risk-degerlendirmesi/' },\n    ],",
        "baglantilar: [\n      { metin: 'Risk değerlendirmesi', href: '/hizmetler/risk-degerlendirmesi/' },\n      { metin: 'İş Hijyeni Ölçümleri', href: '/hizmetler/is-hijyeni-olcumleri/' },\n    ],"
    ),
    (
        "baglantilar: [{ metin: 'İSG danışmanlığı', href: '/hizmetler/isg-danismanligi/' }],",
        "baglantilar: [\n      { metin: 'İSG danışmanlığı', href: '/hizmetler/isg-danismanligi/' },\n      { metin: 'İş Güvenliği Uzmanlığı', href: '/hizmetler/is-guvenligi-uzmanligi/' },\n    ],"
    )
]

for old, new in blog_replacements:
    blog_content = blog_content.replace(old, new)

with open('src/data/blog.ts', 'w', encoding='utf-8') as f:
    f.write(blog_content)


with open('src/data/sektorler.ts', 'r', encoding='utf-8') as f:
    sektorler_content = f.read()

# Enhance some of the short descriptions for SEO
sektorler_replacements = [
    (
        "ozet: 'Yapı işlerinde sağlık ve güvenlik planı, yüksekte çalışma, iskele ve kazı güvenliği.',",
        "ozet: 'İnşaat ve şantiye projelerinde, yüksekte çalışma, iskele kurulumu, kazı güvenliği ve iş kazalarını önlemeye yönelik kapsamlı sağlık ve güvenlik planı hazırlama süreçleri. Profesyonel OSGB hizmetlerimizle şantiyenizi güvence altına alın.',"
    ),
    (
        "ozet: 'Makine güvenliği, ortam ölçümü, periyodik kontroller ve vardiyalı çalışma düzeni.',",
        "ozet: 'Fabrika ve üretim tesisleri için makine güvenliği, iş hijyeni ortam ölçümleri, periyodik kontroller ve vardiyalı çalışma düzenine uygun İSG süreçleri. Üretim hattında sıfır iş kazası hedefiyle OSGB desteği.',"
    ),
    (
        "ozet: 'Forklift trafiği, raf sistemleri, yükleme-boşaltma ve ergonomi.',",
        "ozet: 'Lojistik ve depolama alanlarında forklift-yaya trafik yönetimi, yüksek raf sistemleri güvenliği, yükleme-boşaltma risk analizleri ve ergonomik çalışma koşulları sağlamaya yönelik OSGB hizmetleri.',"
    ),
    (
        "ozet: 'Az tehlikeli sınıfta yükümlülük, ergonomi ve acil durum düzeni. Eğitimin tamamı uzaktan verilebilir.',",
        "ozet: 'Ofis ve hizmet sektöründe az tehlikeli sınıf İSG yükümlülükleri, ofis ergonomisi, acil durum eylem planı hazırlığı ve uzaktan İSG eğitimleri ile kesintisiz ve pratik danışmanlık.',"
    )
]

for old, new in sektorler_replacements:
    sektorler_content = sektorler_content.replace(old, new)

with open('src/data/sektorler.ts', 'w', encoding='utf-8') as f:
    f.write(sektorler_content)

print("Updated blog.ts and sektorler.ts successfully.")
