import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Camera, BookOpen, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Heart,
      title: '감동을 전하는 작업',
      description: '단순한 보정이 아닌, 사랑하는 사람의 빈자리를 채우고 마음을 담아 감동을 전하는 작업을 합니다.',
    },
    {
      icon: Camera,
      title: '10년 넘는 경험',
      description: '2012년부터 축적된 사진보정 & 합성 전문 노하우로 고객의 소중한 기억을 이어드립니다.',
    },
    {
      icon: BookOpen,
      title: '교육과 전자책',
      description: '쌓아온 경험을 교육과 전자책을 통해 더 많은 분들과 나누고 있습니다.',
    },
    {
      icon: Users,
      title: '사람을 담는 사진',
      description: '기억을 더 따뜻하고 오래 남기는 브랜드가 되겠습니다.',
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section - 브랜드 스토리 */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              브랜드 스토리
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-2xl font-medium leading-8 text-blue-800">
              "당신의 소중한 순간을 오래도록 기억할 수 있도록"
            </p>
            <div className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-gray-700">
              <p className="mb-4">
                비비의정원은 2012년 보정업체에서 시작해서 지금은 사진속 기억을 이어주는 전문 브랜드가 되었습니다.
              </p>
              <p className="mb-4">
                단순한 보정이 아닌, 사랑하는 사람의 빈자리를 채우고, 마음을 담아 감동을 전하는 작업을 합니다.
              </p>
              <p>
                이제는 그동안 쌓아온 경험을 교육과 전자책을 통해 더 많은 분들과 나누고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 비비의정원 소개 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            비비의정원 소개
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              비비의정원은 2012년부터 시작된 <strong>사진보정 & 합성 전문 브랜드</strong>입니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              단순히 이미지를 다듬는 일을 넘어, 고객의 소중한 기억과 감정을 사진 속에 다시 이어주는 작업을 하고 있습니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              웨딩사진 속 함께하지 못한 가족을 다시 담아드리거나,<br />
              돌아가신 분의 빈자리를 따뜻하게 채워드리며
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              사진이 단순한 기록이 아니라 <strong>위로와 감동</strong>이 될 수 있다는 것을 보여주고 있습니다.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              10년 넘게 축적된 노하우는 이제 <strong>교육과 전자책</strong>으로 확장되어,<br />
              새로운 창업자와 사진가들이 실무 현장에서 바로 활용할 수 있는 가이드가 되고 있습니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              비비의정원은 앞으로도 <strong>"사람을 담는 사진"</strong>이라는 철학으로,<br />
              기억을 더 따뜻하고 오래 남기는 브랜드가 되겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              우리의 가치
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              비비의정원이 지향하는 핵심 가치와 원칙입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center bg-white">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <highlight.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{highlight.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 대표 인사말 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              대표 인사말
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
            <p>
              안녕하세요. 비비의정원 대표 박지은입니다.
            </p>
            <p>
              저는 사진을 통해 사람들의 추억과 마음을 이어왔습니다.
            </p>
            <p>
              돌아가신 부모님을 웨딩사진에 함께 담고 싶다는 간절한 요청, 가족의 빈자리를 채우고 싶은 마음들…
            </p>
            <p>
              그 속에서 배운 건, 사진은 단순한 기술이 아니라 <strong className="text-blue-200">사람의 기억을 따뜻하게 복원하는 일</strong>이라는 사실입니다.
            </p>
            <p className="text-center pt-4">
              비비의정원은 앞으로도 고객의 마음을 헤아리는 브랜드로 남겠습니다. 감사합니다.
            </p>
            <div className="text-center pt-6">
              <p className="text-xl font-semibold text-blue-200">
                비비의정원 대표 박지은
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}