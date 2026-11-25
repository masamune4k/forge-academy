(function(root){
 'use strict';
 const range=n=>Array.from({length:n},(_,i)=>i+1);
 root.Academy.paths=[
  {id:'frontend',title:'Frontend com React',goal:'Entregar um painel de estudos acessível, tipado e com estados de rede verificáveis.',steps:[['logica',9,'Decisões, funções e decomposição'],['html',18,'Semântica, links, imagens e formulários'],['css',18,'Layout, responsividade e estados visuais'],['javascript',27,'Objetos, eventos, módulos e assincronismo'],['git',9,'Snapshots, diferenças e commits'],['typescript',18,'Contratos, narrowing e generics'],['vite',18,'Ambiente, assets e configuração pública'],['react',36,'Componentes, estado, efeitos, testes e entrega']],projectCourse:'react'},
  {id:'backend',title:'Backend com Go',goal:'Construir uma API com contratos, persistência, testes e operação documentada.',steps:[['logica',9,'Decomposição de regras'],['git',9,'Histórico reproduzível'],['go',24,'Linguagem, testes, concorrência, HTTP e SQL'],['bancos',18,'Modelagem, consultas e integridade'],['postgresql',18,'Persistência e transações'],['docker',18,'Empacotamento e execução local']],projectCourse:'go'},
  {id:'infra',title:'Containers e operação',goal:'Reproduzir a execução e investigar falhas antes de ampliar para um cluster.',steps:[['git',9,'Versões e evidências'],['docker',36,'Imagens, redes, volumes, diagnóstico e entrega'],['kubernetes',36,'Workloads, configuração, segurança e operação']],projectCourse:'kubernetes'}
 ].map(p=>({...p,steps:p.steps.map(([course,n,goal])=>({course,lessons:range(n),goal}))}));
 root.Academy.pathProgress=function(path){
  const steps=path.steps.map(step=>{
   const course=root.Academy.courses[step.course];let state=root.Learning.fresh(course),unavailable=false;
   try{const raw=localStorage.getItem(root.Academy.storageKey(step.course));if(raw)state=root.Learning.sanitize(JSON.parse(raw),course);}catch{unavailable=true;}
   const missing=step.lessons.filter(id=>!root.Learning.complete(state,course.lessons[id-1]));
   return {...step,missing,done:step.lessons.length-missing.length,unavailable,hours:step.lessons.reduce((n,id)=>n+course.lessons[id-1].hours,0)};
  });
  return {steps,next:steps.find(x=>x.missing.length),done:steps.reduce((n,x)=>n+x.done,0),total:steps.reduce((n,x)=>n+x.lessons.length,0),hours:steps.reduce((n,x)=>n+x.hours,0)};
 };
})(window);
