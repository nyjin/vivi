import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Layers, Heart, Info, ArrowRight } from 'lucide-react';

export default function Education() {
  const courses = [
    {
      id: '3.1',
      icon: Camera,
      title: '사진보정 클래스',
      subtitle: '기초부터 실무까지, 사진보정의 탄탄한 기본',
      description: '포토샵을 처음 다루는 분도 부담 없이 시작할 수 있습니다.\n\n실제 고객 작업 기준으로 구성된 실전형 커리큘럼으로 인물 보정, 톤보정, 배경정리, 감성 색감 등 다양하게 다룹니다.\n\n수강 후 바로 고객 작업이 가능한 수준까지 성장할 수 있습니다.\n\n추천 대상: 포토샵 입문자, 취업/부업용 실력 쌓기 희망자, 예비 창업자',
    },
    {
      id: '3.2',
      icon: Layers,
      title: '사진합성 클래스',
      subtitle: '창업을 목표로 하는 분들을 위한 고급 합성 기술',
      description: '결혼식 합성, 고인 합성, 인물 재배치, 복장 교체 등 실제 고객 의뢰 중심의 창업형 합성 기술을 전수합니다.\n\n비비의정원만의 노하우가 담긴 실무 위주 수업으로, 합성의 원리 → 자연스러운 디테일 → 고객 응대까지 전폭 지원합니다.\n\n추천 대상: 합성 기술로 수익 창출 희망자, 보정 경력자, 고급 고객 작업을 원하는 실무형 프리랜서',
    },
    {
      id: '3.3',
      icon: Heart,
      title: '취미 클래스',
      subtitle: '사진을 예쁘게 보정하고 싶은 일반인을 위한 감성 클래스',
      description: '블로그, 인스타그램, 육아일기, 여행사진을 더 예쁘게 만들고 싶은 분께 적합합니다.\n\n포토샵이 어렵게 느껴졌다면, 기초 툴과 자주 쓰는 기능 위주로 배우실 수 있습니다.\n\n배우고 싶은 사진 스타일이나 작업 방향에 맞춘 맞춤 수업도 가능합니다.\n\n추천 대상: 내 웨딩사진 직접 보정 희망자, 사진 애호가, 감성 보정 관심자, SNS 이미지 퀄리티 향상 희망자',
    },
    {
      id: '3.4',
      icon: Info,
      title: '신청 안내',
      subtitle: '정기 모집 & 개별 맞춤 안내',
      description: '각 클래스는 기수별 모집 후 개강되며, 비대면(온라인)과 대면(소수정예) 수업 중 선택할 수 있습니다.\n\n수업은 1:1 피드백 중심으로 과제 제출 및 포트폴리오 제작이 포함됩니다.\n\n개강 전 커리큘럼과 상담 안내를 개별적으로 제공합니다.',
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              보정 클래스
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
              10년간의 실무 경험을 바탕으로<br />
              전문적인 사진 보정 기술을 체계적으로 배워보세요
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            전문 보정 교육 과정
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            초보자부터 전문가까지, 수준별 맞춤 교육을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive-500 group-hover:bg-olive-600 transition-colors">
                    <course.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 bg-olive-50 px-3 py-1 rounded-full">
                    {course.id}
                  </span>
                </div>
                <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 font-medium mt-2">
                  {course.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {course.description.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base text-muted-foreground leading-7">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <Button variant="outline" className="w-full group">
                  수강 신청하기
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Learning Process Section */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              학습 진행 과정
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              체계적인 단계별 학습으로 전문가가 되어보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: '수강 신청', desc: '원하는 과정을 선택하고 신청해주세요' },
              { step: '02', title: '기초 학습', desc: '기본기부터 차근차근 배워나갑니다' },
              { step: '03', title: '실습 진행', desc: '실제 사진으로 실습하며 기술을 익힙니다' },
              { step: '04', title: '포트폴리오 완성', desc: '나만의 작품집을 완성합니다' },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-olive-500 text-white font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-sm text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            자주 묻는 질문 (FAQ)
          </h2>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Q. 포토샵을 전혀 몰라도 수강할 수 있나요?
            </h3>
            <p className="text-base text-gray-600 leading-7">
              네, 모든 수업은 포토샵 입문자도 이해할 수 있도록 구성되어 있으며, 수강 전 단계별 난이도를 안내드립니다.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Q. 수강 후 바로 고객 작업을 할 수 있나요?
            </h3>
            <p className="text-base text-gray-600 leading-7">
              사진보정/합성 클래스는 실무 중심 커리큘럼으로, 수강 완료 후 작업 포트폴리오를 바로 만들 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-olive-500 to-olive-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            전문 보정 기술을 배우고 새로운 시작을 해보세요
          </h2>
          <p className="mx-auto max-w-2xl text-lg mb-8 text-white/90">
            실무 중심의 체계적인 교육으로 여러분의 꿈을 응원합니다.<br />
            지금 바로 시작해보세요!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-olive-600 hover:bg-gray-100">
              <Link to="/contact">
                수강 상담하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-olive-600">
              <Link to="/reservation">
                예약하기
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
