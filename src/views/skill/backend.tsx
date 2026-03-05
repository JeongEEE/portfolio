import React from "react";

const Backend = () => {
  return (
    <div className="bg-[#111] border border-[#222] rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Backend */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
          <div className="h-px w-24 bg-[#333] mb-4"></div>
          <div className="flex flex-wrap gap-2">
            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" className="h-8 w-auto" loading="lazy" />
            <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" className="h-8 w-auto" loading="lazy" />
            <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white" className="h-8 w-auto" loading="lazy" />
            <img src="https://img.shields.io/badge/Mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" className="h-8 w-auto" loading="lazy" />
            <img src="https://img.shields.io/badge/Mongo db-47A248?style=for-the-badge&logo=mongodb&logoColor=white" className="h-8 w-auto" loading="lazy" />
            <img src="https://img.shields.io/badge/Redis-FF4438?style=for-the-badge&logo=redis&logoColor=white" className="h-8 w-auto" loading="lazy" />
            <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white" className="h-8 w-auto" loading="lazy" />
          </div>
        </div>
        {/* Deployment */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Deployment</h3>
          <div className="h-px w-24 bg-[#333] mb-4"></div>
          <div className="flex flex-wrap gap-2">
            <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" className="h-8 w-auto" loading="lazy" />
            <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" className="h-8 w-auto" loading="lazy" />
            <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" className="h-8 w-auto" loading="lazy" />
            <img src="https://img.shields.io/badge/google cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" className="h-8 w-auto" loading="lazy" />
            <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white" className="h-8 w-auto" loading="lazy" />
          </div>
        </div>
        {/* Certificate */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Certificate</h3>
          <div className="h-px w-24 bg-[#333] mb-4"></div>
          <img alt="aws" src="images/aws_cp.png" className="w-24" loading="lazy" />
          <p className="text-zinc-400 text-xs mt-1">AWS Certified Cloud Practitioner</p>
          <p className="text-zinc-600 text-xs">No: J60QQBM1RBRE1HSD</p>
        </div>
      </div>
    </div>
  );
};
export default Backend;