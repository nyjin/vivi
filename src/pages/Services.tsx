import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Heart, Users, Sparkles, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: '2.1',
      icon: Users,
      title: '인물 삭제 합성',
      subtitle: '사진에 원하는 사람만 담을 수 있다면?',
      description: '인물 삭제, 이동 합성은 원하지 않는 인물은 삭제하고 소중한 사람들만 모아 새로운 사진으로 완성해드립니다.',
    },
    {
      id: '2.2',
      icon: Heart,
      title: '고인합성',
      subtitle: '다시 함께하고 싶은 그 마음, 사진으로 이어드립니다.',
      description: '고인합성 서비스는 돌아가신 가족, 사랑하는 분을 현재의 사진 속으로 자연스럽게 모시는 작업입니다. 특별했던 날에 함께하지 못한 그 자리를 따뜻하게 채워드릴 수 있다면 큰 위로가 될 수 있다고 믿습니다.',
    },
    {
      id: '2.3',
      icon: Camera,
      title: '영정사진 합성',
      subtitle: '마지막 인사는 더 정돈되고 존엄한 모습으로.',
      description: '영정사진 합성은 고인의 사진을 단정하고 품위 있게 정리하여 영정사진에 적합한 이미지로 다듬는 작업입니다. 갑작스러운 상황으로 인해 고인의 단독사진이 없거나 화질이 떨어지는 사진, 셀카, 단체사진만 있는 경우에도 최대한 자연스럽고 선명한 이미지로 만들어드립니다.',
    },
    {
      id: '2.4',
      icon: Sparkles,
      title: '기타 합성',
      subtitle: '정해진 메뉴에 없다고 해서, 불가능한 건 아닙니다.',
      description: '비비의정원에서는 고객님의 요청에 따라 다양한 사진 합성 작업을 맞춤형으로 진행합니다. 작업하고 싶은 사진과 함께 "어떻게 만들고 싶은지" 간단히 설명해주시면, 가능 여부와 예상 결과에 대해 사전 상담 후 진행됩니다.',
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              서비스
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
              사진 속 기억을 이어주는 전문 합성 서비스로<br />
              소중한 순간을 더 완전하게 만들어드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            전문 사진 합성 서비스
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            각각의 서비스는 고객의 마음을 헤아리며 정성스럽게 진행됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-500 group-hover:bg-sage-600 transition-colors">
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 bg-sage-50 px-3 py-1 rounded-full">
                    {service.id}
                  </span>
                </div>
                <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 font-medium mt-2">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {service.description.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base text-muted-foreground leading-7">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <Button variant="outline" className="w-full group">
                  자세히 상담하기
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              작업 진행 과정
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              상담부터 완성까지, 단계별로 안내해드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: '상담 신청', desc: '원하는 작업 내용을 상담해주세요' },
              { step: '02', title: '사진 전달', desc: '작업할 사진을 안전하게 전달받습니다' },
              { step: '03', title: '작업 진행', desc: '전문가가 정성스럽게 작업합니다' },
              { step: '04', title: '결과 전달', desc: '완성된 사진을 안전하게 전달드립니다' },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage-500 text-white font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-sm text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sage-500 to-sage-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            소중한 기억을 더 완전하게 만들어보세요
          </h2>
          <p className="mx-auto max-w-2xl text-lg mb-8 text-white/90">
            전문 상담을 통해 고객님만의 특별한 사진을 완성해드립니다.<br />
            언제든지 편안하게 문의해주세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
              <Link to="/contact">
                상담 신청하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-sage-600">
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