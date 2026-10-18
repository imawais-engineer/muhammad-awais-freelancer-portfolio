import asyncio, json, html, io
from pathlib import Path
from PIL import Image
from playwright.async_api import async_playwright
ROOT=Path('/dev-server'); OUT=ROOT/'public/og'
W,H,SCALE=1200,630,2
projects=json.load(open('/tmp/og/projects.json'))
static={
 'home':('AI Automation Engineer · n8n & Make','Muhammad Awais','Smart systems that automate work','profile'),
 'projects':('Portfolio',f'{len(projects)} n8n & AI Automation Case Studies','Real workflows · measured results',None),
 'services':('Services','AI Automation & Agentic Systems Services','n8n · Make.com · AI agents · MCP',None),
 'services-agentic':('Service','Agentic Systems & State Graph Architecture','LangGraph · multi-agent orchestration',None),
 'services-mcp':('Service','Model Context Protocol (MCP) Server Engineering','Custom tools for AI agents',None),
 'services-fullstack':('Service','Full-Stack AI Products & Internal Tools','Next.js · FastAPI · Supabase',None),
 'services-hybrid':('Service','Deterministic Automation & Hybrid Orchestration','n8n + Python, built to be reliable',None),
 'services-n8n':('Service','n8n Workflow Automation Engineer','Workflows that run your operations',None),
 'services-lead':('Service','AI Lead Qualification & CRM Automation','Score, route and follow up automatically',None),
 'about':('About','Muhammad Awais — AI Automation Engineer','Forward Deployed AI Engineer · Pakistan','profile'),
 'contact':('Contact','Start an AI automation project','Reply within 24 hours',None),
 'media-kit':('Media kit','Muhammad Awais','Press bio, photo and links','profile'),
 'terms':('Legal','Terms of Service','imawais.engineer',None),
}
font=(ROOT/'public/fonts/geist-latin-wght-normal.woff2').as_uri(); mono=(ROOT/'public/fonts/geist-mono-latin-wght-normal.woff2').as_uri()
prof=(ROOT/'public/profile.webp').as_uri()
def page(eyebrow,title,result,bg=None,profile=False):
  e=html.escape; size=64 if len(title)<48 else 54 if len(title)<70 else 46
  bgcss=f"background:#0b1220 url('{bg}') left top/cover no-repeat;" if bg else "background:radial-gradient(circle at 80% 20%,#1e3a5f 0,#0b1220 55%),#0b1220;"
  pr=f"<img class=p src='{prof}'>" if profile else ""
  return f"""<html><head><style>
@font-face{{font-family:G;src:url('{font}')}}@font-face{{font-family:M;src:url('{mono}')}}
*{{margin:0;box-sizing:border-box}}body{{width:{W}px;height:{H}px;overflow:hidden;{bgcss}font-family:G;color:#f1f5f9;position:relative}}
.grid{{position:absolute;inset:0;background-image:linear-gradient(rgba(148,163,184,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.07) 1px,transparent 1px);background-size:40px 40px}}
.sh{{position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,18,32,.15) 0%,rgba(11,18,32,.55) 40%,rgba(11,18,32,.97) 72%)}}
.c{{position:absolute;left:60px;right:60px;bottom:52px}}
.e{{font-family:M;font-size:22px;letter-spacing:.18em;text-transform:uppercase;color:#38bdf8;margin-bottom:18px}}
h1{{font-weight:700;font-size:{size}px;line-height:1.08;letter-spacing:-.02em;max-width:1000px}}
.f{{display:flex;justify-content:space-between;align-items:center;margin-top:26px;font-family:M;font-size:24px}}
.r{{color:#4ade80}}.s{{color:#cbd5e1;white-space:nowrap;margin-left:30px}}
.p{{position:absolute;right:70px;top:60px;width:230px;height:230px;border-radius:50%;border:4px solid #38bdf8;object-fit:cover}}
</style></head><body>{'' if bg else '<div class=grid></div>'}<div class=sh></div>{pr}<div class=c>
<div class=e>{e(eyebrow)}</div><h1>{e(title)}</h1><div class=f><span class=r>{e(result)}</span><span class=s>Muhammad Awais · imawais.engineer</span></div></div></body></html>"""
jobs=[(OUT/f'{k}.jpg',page(a,b,c,profile=bool(d))) for k,(a,b,c,d) in static.items()]
for p in projects:
  bg=(ROOT/'public'/p['img'].lstrip('/')).as_uri() if p['img'] else None
  ey=f"{p['cat']} · {'Client project' if p['client'] else 'Portfolio build'}"
  jobs.append((OUT/'projects'/f"{p['slug']}.jpg",page(ey,p['name'],p['result'],bg)))
async def main():
  async with async_playwright() as pw:
    b=await pw.chromium.launch(); pg=await (await b.new_context(viewport={'width':W,'height':H},device_scale_factor=SCALE)).new_page()
    for out,h in jobs:
      f=Path('/tmp/og/t.html'); f.write_text(h); await pg.goto(f.as_uri()); await pg.evaluate("document.fonts.ready"); await pg.wait_for_timeout(150)
      im=Image.open(io.BytesIO(await pg.screenshot(type='png'))).convert('RGB')
      q=90
      while True:
        buf=io.BytesIO(); im.save(buf,'JPEG',quality=q,subsampling=0,optimize=True,progressive=True)
        if buf.tell()<450_000 or q<=72: break
        q-=4
      out.write_bytes(buf.getvalue()); print(out.name,im.size,q,buf.tell()//1024,'KB')
    await b.close()
asyncio.run(main())
