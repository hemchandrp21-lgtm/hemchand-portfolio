import { motion } from 'framer-motion';

function ProcessSection() {
  const approachSteps = [
    {
      num: '01',
      tag: '01 / OBSERVE',
      title: 'OBSERVE & RESEARCH',
      desc: 'Before designing, I try to understand the people, context and problem behind the interface.'
    },
    {
      num: '02',
      tag: '02 / QUESTION',
      title: 'CHALLENGE & QUESTION',
      desc: 'I challenge assumptions and look for the opportunity hidden inside the problem.'
    },
    {
      num: '03',
      tag: '03 / EXPLORE',
      title: 'SKETCH & EXPERIMENT',
      desc: 'I sketch, experiment, prototype and explore different visual directions before settling on one.'
    },
    {
      num: '04',
      tag: '04 / DESIGN',
      title: 'CREATE & EXECUTE',
      desc: 'I turn insights into clear, usable and visually distinctive experiences.'
    },
    {
      num: '05',
      tag: '05 / REFINE',
      title: 'ITERATE & REFINE',
      desc: 'The details matter. I iterate until the interaction, hierarchy and visual language feel right.'
    }
  ];

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#040507] text-white border-t border-white/10 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full filter blur-[160px] pointer-events-none bg-white/[0.02]" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-12"
        >
          <div className="space-y-6 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-white/40" />
              <span className="text-[11px] font-display tracking-[0.25em] text-white/50 uppercase">
                04 / APPROACH &amp; PROCESS
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.02]">
              I DESIGN WITH CURIOSITY, <br />
              <span className="text-white/60">NOT ASSUMPTIONS.</span>
            </h2>
          </div>

          <p className="text-sm font-sans text-white/60 max-w-sm leading-relaxed">
            An uninterrupted, measured sequence of discovery, questioning, experimentation, and refined visual craft.
          </p>
        </motion.div>

        {/* Horizontal Sequence Timeline Bar */}
        <div className="space-y-12">
          {/* Horizontal Line with White Node Dots */}
          <div className="hidden lg:block relative w-full h-[1px] bg-white/10 my-8">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute inset-0 bg-white/20 origin-left"
            />
            <div className="absolute inset-0 flex justify-between items-center -top-[4px]">
              {approachSteps.map((s, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.15 }}
                  className="relative flex flex-col items-center"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sequence Node Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 font-display text-xs">
            {approachSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="space-y-3 group p-6 rounded-2xl bg-[#080a0f] border border-white/10 hover:border-white/30 transition-all cursor-pointer shadow-lg"
              >
                <span className="text-[10px] text-white/40 uppercase tracking-widest block border-b border-white/10 pb-2">
                  {step.tag}
                </span>

                <h3 className="text-base font-display font-bold uppercase tracking-tight text-white group-hover:text-white transition-colors pt-1">
                  {step.title}
                </h3>

                <p className="text-xs text-white/60 font-sans leading-relaxed pt-1">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;



