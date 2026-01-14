import React from "react";
import "./techStackSection.css";

// SVG imports
import angular from "../../assets/svg/AngularJS.svg";
import node from "../../assets/svg/node-js-svgrepo-com.svg";
import dynamodb from "../../assets/svg/aws-dynamodb-svgrepo-com.svg";
import oracle from "../../assets/svg/oracle-svgrepo-com.svg";
import reactIcon from "../../assets/svg/react-svgrepo-com.svg";

import android from "../../assets/svg/android-svgrepo-com.svg";
import php from "../../assets/svg/php-svgrepo-com.svg";
import mysql from "../../assets/svg/mysql-svgrepo-com (1).svg";
import db2 from "../../assets/svg/database-svgrepo-com.svg";
import vue from "../../assets/svg/vue-dot-js-svgrepo-com.svg";

import ios from "../../assets/svg/iOS.svg";
import java from "../../assets/svg/java-svgrepo-com.svg";
import postgresql from "../../assets/svg/postgresql-svgrepo-com.svg";
import redis from "../../assets/svg/redis-svgrepo-com.svg";
import javascript from "../../assets/svg/js-official-svgrepo-com.svg";

import swift from "../../assets/svg/swift-146-svgrepo-com.svg";
import python from "../../assets/svg/python-svgrepo-com.svg";
import mongodb from "../../assets/svg/mongo-svgrepo-com.svg";
import sqlite from "../../assets/svg/SQL Lite.png";
import html from "../../assets/svg/html-svgrepo-com.svg";

import flutter from "../../assets/svg/flutter-svgrepo-com.svg";
import codeigniter from "../../assets/svg/codeigniter-svgrepo-com (1).svg";
import mariadb from "../../assets/svg/mariadb-icon-svgrepo-com.svg";
import supabase from "../../assets/svg/Sybase.svg";
import ionic from "../../assets/svg/ionic-icon-svgrepo-com.svg";

import dotnet from "../../assets/svg/dotnet-svgrepo-com.svg";
import wordpress from "../../assets/svg/wordpress-svgrepo-com.svg";
import shopify from "../../assets/svg/shopify-svgrepo-com.svg";


// ✅ Tech stack with icons (FULL LIST)
export const techStack = [
  { name: "AngularJS", icon: angular },
  { name: "Node", icon: node },
  { name: "DynamoDB", icon: dynamodb },
  { name: "Oracle", icon: oracle },
  { name: "React JS", icon: reactIcon },

  { name: "Android", icon: android },
  { name: "PHP", icon: php },
  { name: "MySQL", icon: mysql },
  { name: "DB2", icon: db2 },
  { name: "Vue.js", icon: vue },

  { name: "iOS", icon: ios },
  { name: "Java", icon: java },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Redis", icon: redis },
  { name: "JavaScript", icon: javascript },

  { name: "Swift", icon: swift },
  { name: "Python", icon: python },
  { name: "MongoDB", icon: mongodb },
  { name: "SQLite", icon: sqlite },
  { name: "HTML", icon: html },

  { name: "Flutter", icon: flutter },
  { name: "CodeIgniter", icon: codeigniter },
  { name: "MariaDB", icon: mariadb },
  { name: "Supabase", icon: supabase },
  { name: "Ionic", icon: ionic },

  { name: ".NET", icon: dotnet },
  { name: "WordPress", icon: wordpress },
  { name: "Shopify", icon: shopify },

];


const TechStackSection = () => {
  return (
    <div className="tech-section_main">
    <div className="container">
    <section className="tech-section">
      <div className="tech-bg-glow"></div>

      <div className="tech-header">
        <h2>Cutting-Edge Tech Stack for Future Ready Solutions</h2>
        <span className="tech-underline"></span>
        <p>
          <strong>At Veva Technology</strong>, we use reliable technologies to deliver
          scalable, secure software solutions. From AI to cloud computing, we
          tailor our tech stack to your project.
        </p>
      </div>

      <div className="tech-grid">
        {techStack.map((tech, index) => (
          <div
            className="tech-card"
            key={index}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <img src={tech.icon} alt={tech.name} className="tech-icon" />
      <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
    </div>
    </div>
  );
};

export default TechStackSection;
