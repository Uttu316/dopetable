import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as d}from"./TableContext-CeuHmo4E.js";import{g as r}from"./eye-DLm12vuq.js";import{T as o}from"./TableHeader-Be0H5m_u.js";import{T as i}from"./TableHead-BMVpvJDW.js";import{V as n}from"./VirtualizedTableBody-TrVN96ew.js";import"./iframe-eB3W52V0.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-D5ITB3-c.js";import"./TableRow-BxcBxQlo.js";const x={title:"Components/DopeTable",component:()=>null},l=r().slice(0,40),s={data:l,loading:!1,filteredAndSortedData:l,visibleData:l.slice(0,10),startIndex:0,endIndex:10,paddingTop:0,paddingBottom:0,selectedIds:new Set,searchTerm:"",healthFilters:new Set,showHealthFilter:!1,sortOrder:null,viewedIds:new Set,scrollTop:0,serverFailed:!1,useLocalData:!1,allSelected:!1,someSelected:!1,handleScroll:()=>{},setSearchTerm:a=>{},handleSelectAll:a=>{},handleSelectRow:(a,c)=>{},toggleHealthFilter:a=>{},toggleSort:()=>{},handleMarkViewed:a=>{},setShowHealthFilter:a=>{},getHealthBadgeColor:a=>"",toggleShowHealthFilter:()=>{},toggleUseLocalData:a=>{}},t=()=>e.jsx(d.Provider,{value:s,children:e.jsx("div",{style:{padding:12,background:"#0f172a"},children:e.jsxs("div",{className:"glass-container",style:{padding:12},children:[e.jsx(o,{}),e.jsx("div",{style:{maxHeight:400,overflow:"auto"},children:e.jsxs("table",{className:"glass-table",style:{width:"100%"},children:[e.jsx(i,{}),e.jsx(n,{visibleData:l,selectedIds:s.selectedIds,viewedIds:s.viewedIds,paddingTop:0,paddingBottom:0,onSelectRow:()=>{}})]})})]})})});t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <TableContext.Provider value={providerValue as any}>\r
    <div style={{
    padding: 12,
    background: "#0f172a"
  }}>\r
      <div className="glass-container" style={{
      padding: 12
    }}>\r
        <TableHeader />\r
        <div style={{
        maxHeight: 400,
        overflow: "auto"
      }}>\r
          <table className="glass-table" style={{
          width: "100%"
        }}>\r
            <TableHead />\r
            <VirtualizedTableBody visibleData={data} selectedIds={providerValue.selectedIds} viewedIds={providerValue.viewedIds} paddingTop={0} paddingBottom={0} onSelectRow={() => {}} />\r
          </table>\r
        </div>\r
      </div>\r
    </div>\r
  </TableContext.Provider>`,...t.parameters?.docs?.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,x as default};
