import requests
import xml.etree.ElementTree as ET
from django.http import JsonResponse,HttpResponse
import re
from bs4 import BeautifulSoup


def home(request):
    return HttpResponse("Ana sayfa çalışıyor. RSS için /rss_proxy/ adresine gidin.")

def rss_proxy(request):
    url = "https://www.milliyet.com.tr/rss/rssnew/teknolojirss.xml"
    resp = requests.get(url)
    root = ET.fromstring(resp.content)

    items = []
    for item in root.findall(".//item"):
        # description güvenli
        desc_tag = item.find("description")
        desc_raw = desc_tag.text if desc_tag is not None else ""
        soup = BeautifulSoup(desc_raw, "html.parser")
        clean_desc = soup.get_text()

        # description içindeki <img> etiketini yakala
        img_tag = soup.find("img")
        image_url = img_tag["src"] if img_tag is not None else None

        # diğer alanlar güvenli
        title_tag = item.find("title")
        link_tag = item.find("link")
        pub_tag = item.find("pubDate")

        items.append({
            "title": title_tag.text if title_tag is not None else "",
            "link": link_tag.text if link_tag is not None else "",
            "description": clean_desc,
            "pubDate": pub_tag.text if pub_tag is not None else "",
            "image": image_url,
        })

    return JsonResponse(items, safe=False)
