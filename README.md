# 📝 Company System — Data Collection & Management Platform

## 🚀 Overview | 项目简介

**EN**  
Company System is a form-driven data collection and management platform designed to handle structured business data such as customers and companies.

It demonstrates how to build a scalable internal system for data entry, validation, and querying.

**CN**  
Company System 是一个基于表单驱动的数据采集与管理系统，用于处理客户、公司等结构化业务数据。

该项目展示了如何构建一个可扩展的企业内部系统，用于数据录入、校验和查询。

---

## 🎯 Problem | 解决的问题

**EN**
- Business data is collected manually with low efficiency  
- Data formats are inconsistent  
- Difficult to query and maintain  

**CN**
- 数据采集依赖人工，效率低  
- 数据格式不统一  
- 查询与维护困难  

---

## 💡 Solution | 解决方案

**EN**
- Structured form-based data input  
- Data validation and normalization  
- Centralized storage and querying  
- Table-based data visualization  

**CN**
- 表单化数据录入  
- 数据校验与标准化  
- 集中存储与查询  
- 表格化展示  

---

## 🧠 Core Features | 核心功能

- 📝 Dynamic Form Input（表单录入）
- ✅ Data Validation（数据校验）
- 📊 Table View（数据展示）
- 🔍 Query & Filtering（查询与筛选）
- ✏️ CRUD Operations（增删改查）

---

## 🏗️ Tech Stack | 技术架构

**Frontend**
- React
- TanStack Table
- TailwindCSS

**Backend**
- Node.js
- TypeScript

**Database**
- PostgreSQL (Neon)

**ORM**
- Drizzle ORM

**Validation**
- Zod

---

## ⚙️ System Design | 系统设计

**EN**
- Form-driven architecture for structured data input  
- Strong validation layer using Zod  
- Clean separation between UI, API, and database  
- Efficient querying using SQL + ORM  

**CN**
- 基于表单驱动的数据录入架构  
- 使用 Zod 进行强校验  
- 前后端 + 数据库分层  
- SQL + ORM 实现高效查询  

---

## 🔄 Workflow | 系统流程

1. User fills in form  
2. Frontend validates data  
3. Backend processes and normalizes data  
4. Data stored in PostgreSQL  
5. Display via table view  

---

## 📂 Project Structure | 项目结构
/frontend → 表单与展示
/backend → API服务
/db → 数据模型
/lib → 公共逻辑


---

## 🚧 Future Improvements | 后续优化

- Dynamic form builder（动态表单生成）
- Role-based access control（权限管理）
- ETL pipeline integration（数据管道）
- Data analytics dashboard（数据分析）
