
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const DemoSection: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-elearning-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See Proctoring Pro In Action</h2>
            <p className="text-xl text-blue-100">
              Watch our interactive demo to see how our proctoring solution maintains academic integrity.
            </p>
          </div>
          
          <div className="bg-elearning-600 p-1 rounded-xl shadow-2xl overflow-hidden">
            <Tabs defaultValue="student" className="w-full">
              <div className="bg-elearning-800/50 rounded-t-lg p-2">
                <TabsList className="grid grid-cols-2 h-12 bg-elearning-700/50 rounded-lg">
                  <TabsTrigger value="student" className="text-lg rounded-md data-[state=active]:bg-white data-[state=active]:text-elearning-700">
                    Student View
                  </TabsTrigger>
                  <TabsTrigger value="admin" className="text-lg rounded-md data-[state=active]:bg-white data-[state=active]:text-elearning-700">
                    Admin View
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="student" className="bg-white rounded-b-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Student Exam Interface" 
                    className="w-full h-auto"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <span className="animate-pulse mr-2 h-2 w-2 bg-white rounded-full"></span>
                    Recording
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-elearning-700/90 p-4 text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-lg font-medium">Physics Final Exam</div>
                        <div className="text-sm text-blue-200">Time Remaining: 45:32</div>
                      </div>
                      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                          <Button className="bg-cyan-500 hover:bg-cyan-600">
                            View Demo
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>Proctoring Pro - Student Experience</DialogTitle>
                          </DialogHeader>
                          <div className="aspect-video bg-black flex items-center justify-center">
                            <div className="text-white text-center p-8">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto mb-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                              </svg>
                              <p className="text-lg">Video demo would play here</p>
                              <p className="text-sm text-gray-400">Showing student authentication and proctoring experience</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="admin" className="bg-white rounded-b-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Admin Dashboard Interface" 
                    className="w-full h-auto"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <span className="mr-2 h-2 w-2 bg-white rounded-full"></span>
                    Admin View
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-elearning-700/90 p-4 text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-lg font-medium">Proctoring Administration Dashboard</div>
                        <div className="text-sm text-blue-200">12 Active Sessions, 3 Alerts</div>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-cyan-500 hover:bg-cyan-600">
                            View Demo
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>Proctoring Pro - Admin Experience</DialogTitle>
                          </DialogHeader>
                          <div className="aspect-video bg-black flex items-center justify-center">
                            <div className="text-white text-center p-8">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto mb-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                              </svg>
                              <p className="text-lg">Video demo would play here</p>
                              <p className="text-sm text-gray-400">Showing admin dashboard and review capabilities</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
