import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { hubControlRooms, hubGateways, hubProtocolSteps, openJitHub } from "@/lib/content";

export const metadata = {
  title: "Open Jit Hub",
  description:
    "Open Jit Hub is the central ARITHAYA control hub for knowledge, wellness, product, Manus coordination, GitHub source, and ACS reporting."
};

export default function OpenJitHubPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 px-6 py-24 text-white">
        <div className="absolute inset-0 signal-grid opacity-25" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-400">
              {openJitHub.label}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              {openJitHub.name}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{openJitHub.thesis}</p>
            <div className="mt-8 border-l border-gold-500 pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                Founder signal
              </p>
              <p className="mt-2 text-2xl font-semibold">{openJitHub.founderSignal}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={openJitHub.sourceUrl}
              className="focus-ring border border-white/14 bg-white/[0.04] p-5 transition hover:border-gold-500/70"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Source</p>
              <p className="mt-4 text-xl font-semibold">GitHub Repository</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-white/60">
                Open source of truth <ExternalLink size={15} />
              </p>
            </a>
            <a
              href={openJitHub.issueUrl}
              className="focus-ring border border-white/14 bg-white/[0.04] p-5 transition hover:border-gold-500/70"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">QA</p>
              <p className="mt-4 text-xl font-semibold">Issue #1</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-white/60">
                Manus report channel <ExternalLink size={15} />
              </p>
            </a>
            <div className="border border-gold-500/35 bg-navy-900/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Local display</p>
              <p className="mt-4 text-xl font-semibold">{openJitHub.operatingUrl}</p>
              <p className="mt-3 text-sm text-white/60">One visible working screen during active work.</p>
            </div>
            <a
              href={openJitHub.manuscriptUrl}
              className="focus-ring border border-gold-500/35 bg-navy-900/80 p-5 transition hover:border-gold-500"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Preview</p>
              <p className="mt-4 text-xl font-semibold">Manus Live Preview</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-white/60">
                Compare deployment <ExternalLink size={15} />
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Central gateway"
            title="ทุกเส้นทางของ ARITHAYA เข้าจาก hub เดียว."
            description="หน้านี้ทำหน้าที่เป็นศูนย์กลางสำหรับผู้บริหาร ทีมสร้าง ทีม QA และพันธมิตร เพื่อเข้าใจระบบและไปยังงานถัดไปได้ทันที."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {hubGateways.map((gateway) => {
              const Icon = gateway.icon;

              return (
                <Link
                  key={gateway.href}
                  href={gateway.href}
                  className="focus-ring group border border-navy-950/10 bg-mist p-6 transition hover:border-gold-500 hover:bg-white"
                >
                  <div className="flex items-center justify-between gap-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                      {gateway.label}
                    </p>
                    <Icon className="h-6 w-6 text-gold-500" aria-hidden="true" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-navy-950">{gateway.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-graphite">{gateway.description}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-950">
                    Open layer <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Protocol sequence"
            title="ลำดับเดิมถูกทำให้เห็นเป็นระบบปฏิบัติการ."
            description="Open Jit Hub แสดงรอบการทำงาน Check, Build, Display, Report, Commit เพื่อไม่ให้ Codex, Manus, GitHub และ ACS หลุดจากจังหวะเดียวกัน."
            inverse
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {hubProtocolSteps.map((step) => (
              <article key={step.phase} className="border border-white/14 bg-white/[0.04] p-5">
                <p className="text-sm font-semibold text-gold-400">{step.phase}</p>
                <h2 className="mt-5 text-2xl font-semibold">{step.title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/62">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Control rooms"
            title="ศูนย์กลางเดียว แต่แยกหน้าที่ชัด."
            description="แต่ละห้องมี owner, หน้าที่ และ output ของตัวเอง เพื่อลดงานซ้ำและทำให้ handoff ตรวจสอบได้."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {hubControlRooms.map((room) => {
              const Icon = room.icon;

              return (
                <article key={room.title} className="border border-navy-950/10 bg-white p-6">
                  <div className="flex items-center justify-between gap-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                      {room.owner}
                    </p>
                    <Icon className="h-6 w-6 text-gold-500" aria-hidden="true" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-navy-950">{room.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-graphite">{room.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
