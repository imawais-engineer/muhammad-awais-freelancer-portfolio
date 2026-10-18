import { projects } from "/dev-server/src/data/projects";
import { projectImages } from "/dev-server/src/data/projectImages";
console.log(JSON.stringify(projects.map(p=>({slug:p.slug,name:p.name,cat:p.domainCategory||p.category,client:!!p.clientWork,result:p.headlineResult,platform:p.platform,img:projectImages[p.slug]||null}))));
