import React from 'react';
import Layout from './components/Layout/Layout';
import CodeEditor from './components/CodeEditor/CodeInput';
import { Card } from './components/ui/card';

function App() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-6">
          <h1 className="text-2xl font-bold text-center p-4">
            CodeLens - AI-Powered Code Understanding
          </h1>
        </Card>
        <CodeEditor />
      </div>
    </Layout>
  );
}

export default App;