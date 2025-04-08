import React from 'react';
import { LangSwitch } from './LangSwitch';

interface PageHeaderProps {
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-16 space-y-8 md:space-y-0">
      <h1 className="text-5xl font-bold text-gray-900 leading-tight text-center md:text-left">
        {title}
      </h1>
      <LangSwitch />
    </div>
  );
};