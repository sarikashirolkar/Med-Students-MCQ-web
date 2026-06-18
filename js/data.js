/*
 * ============================================================
 *  QUIZ DATA
 * ============================================================
 *
 *  HOW TO ADD QUESTIONS
 *  --------------------
 *  Find the chapter you want, and add objects to its `questions` array.
 *  Each question looks like this:
 *
 *      {
 *        q: "What is the question text?",
 *        options: ["First choice", "Second choice", "Third choice", "Fourth choice"],
 *        answer: 2,                       // index of the correct option (0 = first)
 *        explanation: "Why it is correct" // OPTIONAL — leave "" if none
 *      }
 *
 *  Notes:
 *   - `answer` is the position in the ORIGINAL options array. The app shuffles
 *     options on screen automatically, so don't worry about display order.
 *   - You can have any number of options (2, 3, 4, 5...).
 *   - Do NOT edit the question or answer text — just paste them in.
 * ============================================================
 */

const QUIZ_DATA = {
  micro: {
    name: "Microbiology",
    emoji: "🦠",
    enabled: true,
    papers: {
      paper1: {
        name: "Paper 1",
        enabled: true,
        chapters: {
          "general-microbiology": {
            name: "General Microbiology",
            emoji: "🔬",
            questions: [
              // ── History & pioneers ──
              {
                q: "All of the following are Koch's postulates EXCEPT:",
                options: [
                  "The bacterium should be constantly associated with the lesions of the disease caused by it",
                  "It should be possible to isolate the bacterium in pure culture from the lesions",
                  "Inoculation of such pure cultures into suitable laboratory animals should reproduce the disease",
                  "The bacterium need not be re-isolated from lesions produced in experimental animals"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following organisms does not follow Koch's postulates?",
                options: ["Mycobacterium leprae", "Escherichia coli", "Klebsiella species", "Staphylococcus aureus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Stanley B. Prusiner was awarded the Nobel prize for his discovery of:",
                options: ["Prions", "Cell-mediated immunity", "Smallpox vaccine", "Penicillin"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The first scientist to have observed bacteria using a single lens microscope is",
                options: ["Edward Jenner", "Antonie van Leeuwenhoek", "Alexander Fleming", "Louis Pasteur"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Who is the father of antiseptic surgery?",
                options: ["Robert Koch", "Paul Ehrlich", "Joseph Lister", "Alexander Fleming"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All of the following are contributions of Louis Pasteur EXCEPT:",
                options: [
                  "The introduction of sterilisation techniques",
                  "The discovery of the vaccine for hydrophobia",
                  "The introduction of antiseptic techniques in surgery",
                  "The discovery of the principles of fermentation"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "The smallpox vaccine was discovered by:",
                options: ["Edward Jenner", "Joseph Lister", "Niels Jerne", "Paul Ehrlich"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Who is credited with the discovery of the electron microscope?",
                options: ["Antonie V Leeuwenhoek", "Ernst Ruska", "Niels Jerne", "Frank Burnet"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The first whole-genome sequence of a microbe was published in 1995. Which organism's genome was the first to be published in 1995?",
                options: ["H. influenzae", "Staphylococcus aureus", "Streptococcus pyogenes", "Escherichia coli"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following bacteria was discovered by Robert Koch?",
                options: ["Mycobacterium leprae", "Vibrio cholerae", "Treponemes", "Clostridium tetani"],
                answer: 1,
                explanation: ""
              },

              // ── Microscopy ──
              {
                q: "Which microscope is based on the principle that differences in the refractive indices of bacterial cells and the surrounding medium make them clearly visible?",
                options: ["Dark-ground microscope", "Phase-contrast microscope", "Electron microscope", "Confocal microscope"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Resolving power of microscope depends upon",
                options: [
                  "Focal length and aperture of eye lens",
                  "Focal length and objective of eye lens",
                  "Aperture of objective and eye lens",
                  "Wave length of light illuminating the object"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "The resolving power of light microscope",
                options: ["2mm", "0.2mm", "0.1mm", "1mm"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following microscopes is most useful for viewing the internal structures of an unstained specimen",
                options: ["Phase contrast", "Confocal", "Electron", "Any of the above"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is true regarding fluorescence microscope",
                options: [
                  "It uses light from a low intensity source to excite a fluorescent agent",
                  "It uses light from a high intensity source to excite a fluorescent agent",
                  "It can use both low as well as high intensity light",
                  "It is not of much use in microbiology"
                ],
                answer: 1,
                explanation: ""
              },

              // ── Bacterial cell structure & physiology ──
              {
                q: "All of the following statements are TRUE of the outer membrane layer of the gram-negative cell wall EXCEPT:",
                options: [
                  "It forms the outermost layer",
                  "It is responsible for endotoxic activities",
                  "It has receptors for some bacteriophages",
                  "Porins in this layer serve as diffusion channels for small molecules"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Peritrichous arrangement of flagella refers to:",
                options: [
                  "A single flagellum at one pole",
                  "Flagella all around the cell",
                  "Flagella at both poles",
                  "Tufts of flagella at one pole"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "The organ of adhesion in bacteria is the:",
                options: ["Flagellum", "Fimbria", "Capsule", "Mesosome"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Bacteria that grow at temperatures below 20°C are called:",
                options: ["Mesophiles", "Thermophiles", "Psychrophiles", "Capnophiles"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All the following statements are TRUE about L-forms of bacteria EXCEPT that they:",
                options: [
                  "Are aberrant morphological forms",
                  "Develop in the presence of penicillin",
                  "Are always stable",
                  "Are named after Lister Institute, London"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "All the following statements are TRUE about bacterial spores EXCEPT that:",
                options: [
                  "They are a method of reproduction",
                  "They are resistant to desiccation",
                  "They can be destroyed by autoclaving at 120°C for 15 minutes",
                  "They are produced by the genus Bacillus"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "In which phase of bacterial growth does sporulation occur?",
                options: ["Lag phase", "Log phase", "Stationary phase", "Phase of decline"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is an enrichment medium?",
                options: ["Nutrient broth", "Tetrathionate broth", "Stuart's medium", "Thayer-Martin medium"],
                answer: 1,
                explanation: ""
              },
              {
                q: "MacConkey agar is an example of:",
                options: ["Differential medium", "Transport medium", "Enriched medium", "Anaerobic medium"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following are enriched media EXCEPT:",
                options: ["Loeffler's serum slope", "Blood agar", "Chocolate agar", "Nutrient agar"],
                answer: 3,
                explanation: ""
              },

              // ── Classification, pathogenesis & culture ──
              {
                q: "Phenotypic classification refers to classification based on:",
                options: [
                  "Direct analysis of genes in microbes",
                  "Chromosomal and extrachromosomal DNA analysis of microbes.",
                  "Expressed characteristics of microorganisms.",
                  "Nucleotide sequencing of microbes"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Incubation period refers to the time duration",
                options: [
                  "Between entry of pathogen and exit of pathogen in body",
                  "Between entry of pathogen in vector and entry in host",
                  "Between entry of pathogen and manifestation of symptoms or signs in host",
                  "Between entry of pathogen and its detection in host"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is not a gram-positive coccus?",
                options: ["Pneumococcus", "Meningococcus", "Enterococcus", "Staphylococcus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Microorganisms that fail to grow in the presence of as low as 0.03% O2 are called:",
                options: ["Aerotolerant", "Obligate anaerobes", "Facultative anaerobes", "Facultative aerobes"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Most enteric bacilli are motile. The one which is non-motile is:",
                options: ["Salmonella", "E. coli", "Klebsiella", "Proteus"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The always pathogenic Enterobacteriaceae is:",
                options: ["E. coli", "Klebsiella", "Shigella", "Yersinia"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Serotyping or antigenic typing of E. coli is based on:",
                options: ["Somatic antigen O", "Flagellar antigen H", "Capsular antigen K", "All of these"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The commonest culture media used for Leptospirais:",
                options: ["Korthof's", "Fletcher's", "Stuart's", "EMJH"],
                answer: [0, 3],
                explanation: ""
              },
              {
                q: "Which of the following is NOT a gram-positive bacillus?",
                options: ["Staphylococcus", "Corynebacterium", "Bacillus", "Clostridium"],
                answer: 0,
                explanation: ""
              },

              // ── Virology ──
              {
                q: "Which of the following virus is enveloped",
                options: ["Pox virus", "Herpes virus", "Adeno virus", "Parvovirus B19"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The largest virus in size",
                options: ["Herpes simplex virus", "Hepatitis B virus", "Pox virus", "Adenovirus"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Smallest virus in size",
                options: ["Picornavirus", "Parvovirus", "Hepatitis D virus", "Adenovirus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All of the following are RNA viruses except",
                options: ["Adenovirus", "Enterovirus", "Coxackievirus", "Hepatitis A virus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Subunit vaccine is used for",
                options: ["Hepatitis A", "Hepatitis B", "Japanese B Encephalitis", "Mumps"],
                answer: 1,
                explanation: ""
              },

              // ── Mycology ──
              {
                q: "The rigidity of fungal cell walls is due to presence of:",
                options: ["Protein", "Chitin", "Teichoic acid", "Lipopolysaccharide"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is a subcutaneous mycosis?",
                options: ["Favus", "Pityriasisversicolor", "Tineacapitis", "Chromomycosis"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following is a superficial fungal infection?",
                options: ["Favus", "Pityriasisversicolor", "Tineacapitis", "Chromomycosis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which one of the following fungi is NOT a mould?",
                options: ["Rhizopus", "Cryptococcus", "Aspergillus", "Penicillium"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is the morphological characteristic that refers to fungi imperfecti?",
                options: ["Lack of cell wall", "Lack of septate hyphae", "Unidentified sexual phases", "Unidentified microconidia"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is correct regarding Sabouraud dextrose agar?",
                options: [
                  "Yeast do not grow on this medium.",
                  "It has a high concentration of either glucose or maltose",
                  "The pH of the medium is high (8.4)",
                  "It is prepared n petri dishes"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "A fungus was isolated from a CSF specimen. It grew at 25°C and 37°C, showed only budding yeast cells and no pseudohyphae, chlamydospores or arthroconidia. It is an example for",
                options: ["Yeast", "Yeast like fungus", "Mold", "Dimorphic fungus"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which stain can be used to visualise fungi from culture?",
                options: ["Lactophenol cotton blue", "KOH", "ZN stain", "Methenamine silver stain"],
                answer: 0,
                explanation: ""
              },
              {
                q: "In a patient with brain abscess serum β-d-glucan assay was positive. This indicates that infection is caused by",
                options: ["Staphylococcus", "Aspergillus", "Mycobacterum", "Entamoebahistolytica"],
                answer: 1,
                explanation: ""
              },
              {
                q: "An elderly diabetic lady is admitted to the ICU for multi organ failure. Her blood culture bottles are flagged positive on second day. Gram stain of positive blood culture showed gram positive budding yeast cells. The test that can identify the organism most accurately and quickly is",
                options: ["PCR", "Automated identification method-Vitek", "Chromagar", "MALDITOF"],
                answer: 2,
                explanation: ""
              },

              // ── Parasitology ──
              {
                q: "A previously healthy lady presented with frequent watery stools for 2 days. Considering parasitic intestinal infection, useful investigations here would be all, EXCEPT",
                options: [
                  "Saline wet mount to demonstrate trophozoites",
                  "Saline wet mount to demonstrate larvae",
                  "Gram stain to demonstrate cysts",
                  "Modified acid fast stain to demonstrate oocysts"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 5 year old boy passed a worm in his stool. It was whitish measuring 15cm, had a cylindrical body and was motile. The organism is likely to be",
                options: ["protozoan parasite", "trematode", "cestode", "nematode"],
                answer: 3,
                explanation: ""
              },
              {
                q: "An organism that cannot exist without a host under any circumstance is known as:",
                options: ["Obligate parasite", "Facultative parasite", "Ectoparasite", "Endoparasite"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which statement is an accurate description of paratenic host?",
                options: [
                  "It is a host in which the adult stage of the parasite lives",
                  "A host that harbours the larval stage of the parasite",
                  "Host harbours the parasite and also acts as a source of infection",
                  "Host acts as a transport or carrier host as the parasite is unable to develop further in this host"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following is a nematode?",
                options: ["Hymenolepisdiminuta", "Loa loa", "Fasciola hepatica", "Paragonimus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "In which of the following worm does the infection occur by piercing of intact skin by filiform larval forms?",
                options: ["Ancylostomaduodenale", "Ascarislumbricoides", "Echinococcusgranulosus", "Trichinellaspiralis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Vertical transmission is seen in",
                options: ["Toxoplasma gondii", "Trichomonasvaginalis", "Trichinellaspiralis", "None of the above"],
                answer: 0,
                explanation: ""
              },
              {
                q: "NIH swab is used for diagnosis of:",
                options: ["Pinworm", "Hookworm", "Whipworm", "Roundworm"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Modified acid-fast staining technique is used to visualise the oocyst of:",
                options: ["Cryptosporidium", "Cystoisospora", "Cyclospora", "All of the above"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Novy, Nicoll and McNeal (NNN) medium:",
                options: [
                  "Is used for the growth of Plasmodium species",
                  "It has one part of defibrinated rabbit blood and one part salt agar",
                  "It is poured in petri dishes",
                  "The promastigotes transform into amastigote forms within 4 weeks"
                ],
                answer: 1,
                explanation: ""
              },

              // ── Bacterial genetics & molecular techniques ──
              {
                q: "Transfer of DNA from one bacterium to another by a bacteriophage is called:",
                options: ["Conjugation", "Transduction", "Transformation", "Transposition"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is responsible for the transfer of drug resistance in bacteria?",
                options: ["Colicinogenic factor", "Resistance transfer factor", "F factor", "None of these"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Transfer of genetic information through free DNA is called:",
                options: ["Transformation", "Transduction", "Conjugation", "Lysogenic conversion"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Northern blotting is used for the analysis of:",
                options: ["DNA", "RNA", "Proteins", "All of these"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is NOT TRUE regarding bacterial plasmids?",
                options: [
                  "They are extrachromosomal",
                  "They are eliminated by treating with radiation",
                  "They cannot replicate independently",
                  "They are not essential for bacterial life"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Jumping genes are:",
                options: ["Episomes", "Plasmids", "Transposons", "Transfer factor"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The technique for identifying DNA fragments by DNA-DNA hybridisation is:",
                options: ["Northern blotting", "Southern blotting", "Eastern blotting", "Western blotting"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The procedure of Southern blotting is:",
                options: [
                  "Fragmentation → gel electrophoresis → blotting → hybridisation",
                  "Gel electrophoresis → fragmentation → blotting → hybridisation",
                  "Fragmentation → gel electrophoresis → hybridisation → blotting",
                  "Fragmentation → blotting → gel electrophoresis → hybridization"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Identify the correct sequence of steps involved in polymerase chain reaction (PCR):",
                options: [
                  "Extraction, denaturation, annealing, extension",
                  "Denaturation, extraction, annealing, extension",
                  "Extension, annealing, denaturation, extraction",
                  "Annealing, extraction, denaturation, extension"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "PCR in which a second set of specific primers is used is:",
                options: ["Nested PCR", "Hot-start PCR", "High-fidelity PCR", "Arbitrary primed PCR"],
                answer: 0,
                explanation: ""
              },

              // ── Immunity & host defence ──
              {
                q: "Which of the following statements is TRUE regarding passive immunity?",
                options: [
                  "Confers immediate immunity",
                  "Host immune system takes part",
                  "Negative phase occurs",
                  "Induced by infection"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following statements are TRUE regarding the functions of the thymus EXCEPT:",
                options: [
                  "The thymus produces thymic lymphocytes",
                  "The thymus reaches its maximal relative size just before birth",
                  "The thymus functions best after puberty",
                  "The thymus is the main site of lymphocyte proliferation"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Toll-like receptors (TLRs) are:",
                options: [
                  "Transmembrane receptors present on macrophages and dendritic cells",
                  "Present on the surface of phagocytes to bind to mannose-rich glycans",
                  "Nucleotide-binding oligomerisation domain like receptors to recognise intracellular bacterial cell products",
                  "Molecules that bind to the surface of microbes"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which is not a macrophage?",
                options: ["Monocyte", "Microglia", "Kupffer cells", "Lymphocytes"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Defective phagocytosis results in the following condition:",
                options: [
                  "Chronic granulomatous disease",
                  "DiGeorge syndrome",
                  "Chediak–Higashi syndrome",
                  "Common variable immunodeficiency"
                ],
                answer: 2,
                explanation: ""
              }
            ]
          },
          "immunology": {
            name: "Immunology",
            emoji: "🛡️",
            // ── SHORT-ANSWER Q&A ──
            // Each item: { q: "question text", a: "model answer" }
            // The answer (`a`) may contain simple HTML (e.g. <b>…</b>, <br>) and
            // line breaks are preserved. Add as many as you like.
            qanda: [
              {
                q: "What is the earliest immunoglobulin synthesised by the fetus?",
                a: "<b>IgM.</b> It is produced from about the 20th week of gestation. Raised IgM in cord blood suggests intrauterine (congenital) infection."
              },
              {
                q: "Briefly, what is the difference between active and passive immunity?",
                a: "<b>Active immunity</b> — the host's own immune system responds (to infection or vaccine); slower onset but long-lasting, with memory.\n<b>Passive immunity</b> — ready-made antibodies are transferred (e.g. maternal IgG, antiserum); immediate protection but short-lived, no memory."
              }
            ],
            questions: [
              // ── Antigens & haptens ──
              {
                q: "All the following statements are TRUE regarding haptens EXCEPT:",
                options: [
                  "They require additional carrier proteins",
                  "Simple haptens have only one antibody binding site",
                  "Complex haptens are non-precipitating",
                  "Simple haptens can inhibit precipitation"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Conformational epitope is:",
                options: [
                  "A product of a linear peptide sequence",
                  "Produced by different sites of the peptide chain",
                  "Recognised by T cells",
                  "Also called sequential epitope"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is most immunogenic?",
                options: ["Proteins", "Lipids", "Polysaccharides", "Monosaccharides"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The main aim of an adjuvant is to increase:",
                options: ["Distribution", "Absorption", "Antigenicity", "Metabolism."],
                answer: 2,
                explanation: ""
              },
              {
                q: "Isospecificity depends on:",
                options: [
                  "Antigens present in some members of the same species",
                  "Antigens present in all members of the same species",
                  "Closely related antigens in biologically different species",
                  "Self-antigens that are not ordinarily antigenic"
                ],
                answer: 0,
                explanation: ""
              },

              // ── Immunoglobulins ──
              {
                q: "A single Ig molecule contains:",
                options: [
                  "1 light chain, 1 heavy chain",
                  "2 light chains, 1 heavy chain",
                  "2 light chains, 2 heavy chains",
                  "1 light chain, 2 heavy chains"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "The earliest immunoglobulin synthesised by the fetus is:",
                options: ["IgG", "IgA", "IgE", "IgM"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The antigen combining site present on the antibody molecule is called:",
                options: ["Epitope", "Paratope", "Hapten", "Carrier protein"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the Igs is normally transported across the placenta?",
                options: ["IgA", "IgM", "IgG", "IgE"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All the following statements are TRUE regarding IgA EXCEPT:",
                options: [
                  "Has a monomeric structure",
                  "Molecular weight is 400,000 kDa",
                  "Glycopeptide bond",
                  "Protects against poliovirus"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which Ig class is involved in type I hypersensitivity?",
                options: ["IgA", "IgE", "IgM", "IgG"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which Ig class has the maximum intravascular distribution?",
                options: ["IgA", "IgG", "IgE", "IgM"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following Igs is heat-labile?",
                options: ["IgA", "IgE", "IgD", "IgM"],
                answer: 1,
                explanation: ""
              },
              {
                q: "B cell receptors are constituted by:",
                options: ["IgG and IgM", "IgE and IgM", "IgD and IgG", "IgM and IgD"],
                answer: 3,
                explanation: ""
              },

              // ── Antigen–antibody reactions ──
              {
                q: "All the following forces are involved in antigen–antibody reactions EXCEPT:",
                options: ["Van der Waals forces", "Electrostatic bond", "Hydrogen bond", "Covalent bond"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Avidity is highest in:",
                options: ["IgA", "IgM", "IgG", "IgE"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Prozone phenomenon is due to:",
                options: ["Antigen excess", "Antibody excess", "Both antigen and antibody excess", "None of these"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All the following are TRUE about precipitation reactions EXCEPT:",
                options: [
                  "Reaction of soluble antigen with antibody",
                  "Very sensitive for the detection of antigens",
                  "Elek test is an example",
                  "Coombs test is an example"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 25-year-old man with a history of multiple sexual partners is admitted with unexplained fever, loss of weight and persistent diarrhea for the past 6 months. His blood is drawn after counselling to detect antibody against HIV. The laboratory will test using ELISA. Which of the following statements is true regarding ELISA?",
                options: [
                  "It uses horseradish peroxidase as the substrate",
                  "It is performed in a microtiter plate having 46 wells",
                  "Direct ELISA is used for detecting antibody in test serum",
                  "Indirect ELISA can be used to detect both antigen and antibody in serum"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Rose-Waaler test is an example of:",
                options: [
                  "Latex agglutination test",
                  "Reversed passive agglutination",
                  "Passive hemagglutination",
                  "Co-agglutination test."
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Chemiluminescence refers to a clinical reaction emitting energy in the form of:",
                options: ["Electric current", "Chemical reaction", "Photons", "Ionising radiation"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Widal test is a type of:",
                options: [
                  "Precipitation reaction",
                  "Agglutination reaction",
                  "Neutralisation test",
                  "Complement fixation test"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is the correct flow diagram to depict the principle of ELISA?",
                options: [
                  "Ag-Ab complex-enzyme + substrate-----> activates chromogen -----> colour change ----> detection by spectrophotometry",
                  "Ag-Ab + substrate ----> activates enzyme-chromogen -----> colour change ----> detection by spectrophotometry",
                  "Ag-Ab complex-substrate -----> activates enzyme ----> add chromogen -----> colour change ----> detection by spectrophotometry",
                  "Ag-Ab complex-enzyme -----> activates chromogen -----> colour change ----> detection by spectrophotometry"
                ],
                answer: 0,
                explanation: ""
              },

              // ── Complement ──
              {
                q: "All the statements are TRUE regarding classical pathway EXCEPT:",
                options: [
                  "Activated by antigen-antibody complex",
                  "Calcium ions are required for activation",
                  "C3 convertase has C4b2b",
                  "C5 convertase has C4b2a3b"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Individuals are more prone to gonococcal infection if there is a deficiency of:",
                options: ["C1 inhibitor", "C1 and C2", "C5-C8", "C3b inactivator"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is an activator of the alternate pathway?",
                options: ["DNA", "C-reactive protein", "Bacterial endotoxins", "Trypsin-like enzymes"],
                answer: 2,
                explanation: ""
              },
              {
                q: "In the alternate pathway, C3 pro-activator is:",
                options: ["Factor D", "Factor 1", "Factor H", "Factor B"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Biosynthesis of complements takes place at the following sites in the body EXCEPT:",
                options: ["Macrophages", "Spleen", "Liver", "Bone marrow"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which among the following is not a function of complement?",
                options: ["Phagocytosis", "Inflammatory response", "Antigen presentation", "Immune clearance"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following acts as an inhibitor of complement?",
                options: ["Factor P", "Factor H", "C4 binding protein", "Anaphylatoxininactivator"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Collagen vascular diseases are associated with the deficiency of:",
                options: ["C1,C2,C3", "C1, C2, C4", "C1,C5,C8", "C2, C3, C4"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 7-year-old boy presents with disseminated Neisseria infection. His other parameters are normal but the pediatrician suspects complement deficiency. Such infection is commonly associated with deficiency of:",
                options: ["Properdin", "Factor D", "C1 inhibitory deficiency", "Membrane attack complex"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The membrane attack complex consists of:",
                options: ["Colicins", "C3b3b,Bb", "C5b,6,7,8,9", "Properdin"],
                answer: 2,
                explanation: ""
              },

              // ── Immune response & cytokines ──
              {
                q: "Which of the following is the function of antibody-mediated immunity?",
                options: [
                  "Immunological surveillance",
                  "Graft-versus-host reaction",
                  "Protection against fungi",
                  "Extracellular bacterial pathogens"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which among the following is TRUE of primary immune response?",
                options: [
                  "It is carried out by memory B cells",
                  "The predominant antibody is IgG",
                  "Peak response is in 3–5 days",
                  "A high dose of antigen is required"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following statements is TRUE for optimal antibody production?",
                options: [
                  "Large particulate antigens should be administered in tissues",
                  "IgA production is better when antigens are administered parentally",
                  "Antibody production increases with increase in dosage",
                  "Simultaneous administration of multiple antigens has no effect"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "IL-1 produces:",
                options: [
                  "T lymphocyte activation",
                  "Delayed wound healing",
                  "Increased pain perception",
                  "Decreased PMN release from the bone marrow"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "IL-4 is primarily produced by:",
                options: ["Macrophages", "B cells", "T cells", "Fibroblasts"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is a pro-inflammatory marker?",
                options: ["IL-4", "IL-9", "IL-11", "IL-17"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following is an important endogenous pyrogen?",
                options: ["IL-1", "IL-2", "IL-3", "IL-4"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Cytokines are:",
                options: [
                  "Hormone-like substances, that are active even at minute concentrations",
                  "They are produced by endocrine glands",
                  "Regulated by exogenous stimuli such as antigens only",
                  "They act on the cells away from those producing them"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is true regarding cell-mediated immunity?",
                options: [
                  "It is involved in type 1 hypersensitivity",
                  "It has a minimal role in early rejection in a pre-exposed person",
                  "It plays a role in the classical pathway of complement activation",
                  "It plays a major role in homograft rejection and graft-versus-host reaction"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Interferon gamma, a type of cytokine, has the following function:",
                options: [
                  "It activates B cells to produce IgG",
                  "It has antiviral activity",
                  "It is used in the treatment of leukemia",
                  "It is secreted by macrophages"
                ],
                answer: 0,
                explanation: ""
              },

              // ── Hypersensitivity ──
              {
                q: "All the following are important steps in the mechanism of anaphylaxis EXCEPT:",
                options: [
                  "Activation by the allergen-specific Th2 cells",
                  "Secretion of IgE by plasma cells",
                  "Crosslinking of the cell-bound IgE",
                  "Activation of complements"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "RAST is used to detect:",
                options: [
                  "Type 1 hypersensitivity",
                  "Type II hypersensitivity",
                  "Type III hypersensitivity",
                  "Type IV hypersensitivity"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is NOT a primary mediator of anaphylaxis?",
                options: ["5-HT", "Leukotrienes", "Platelet activating factor", "Heparin"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Delayed hypersensitivity can be transferred by:",
                options: ["Lymphocytes", "Neutrophils", "Macrophages", "Eosinophils"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Tuberculin test is which type of hypersensitivity reaction?",
                options: ["IgE type", "Cytolytic and cytotoxic type", "Immune complex", "Delayed type"],
                answer: 3,
                explanation: ""
              },
              {
                q: "One type of immune complex-mediated hypersensitivity is:",
                options: [
                  "Arthus reaction",
                  "Schwartzman reaction",
                  "Schultz–Dale phenomenon",
                  "Passive cutaneous anaphylaxis"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which among the following is a reagin-dependent hypersensitivity?",
                options: ["Type I", "Type II", "Type III", "Type IV"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 5-year-old girl presents with complaints of a recurrent history of breathlessness and wheezing. Detailed history reveals similar episodes in the past few years usually around February and March. A clinical diagnosis of bronchial asthma is made. What type of hypersensitivity reaction is bronchial asthma?",
                options: ["Type I", "Type II", "Type III", "Type IV"],
                answer: 0,
                explanation: ""
              },

              // ── Immunodeficiency ──
              {
                q: "All the following are features of Bruton's disease EXCEPT:",
                options: [
                  "The disease is evident after six months of life",
                  "Tonsils and adenoids are atrophic",
                  "Live vaccines should not be given",
                  "Patient presents with recurrent viral infections"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following options is FALSE about late-onset hypogammaglobulinemia?",
                options: [
                  "Disease manifests after 15 years of age",
                  "Low level of total immunoglobulin",
                  "Recurrent bacterial infections",
                  "Also known as selective immunoglobulin immunodeficiency"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which selective immunoglobulin deficiency is associated with steatorrhea?",
                options: ["IgA deficiency", "IgG deficiency", "IgM deficiency", "IgD deficiency"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following diseases is NOT a severe combined immunodeficiency?",
                options: [
                  "Wiskott–Aldrich syndrome",
                  "Job syndrome",
                  "Ataxia telangiectasia",
                  "Adenosine deaminase (ADA) deficiency"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "All the following are features of Wiskott–Aldrich syndrome EXCEPT:",
                options: [
                  "Raised serum IgM",
                  "Absence of isohemagglutinins",
                  "Serum IgG levels are normal",
                  "Serum IgE levels are raised"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which is found is DiGeorge syndrome?",
                options: ["Tetany", "Eczema", "Absent B and T cells", "Total absence of T cells"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Hereditary angioneurotic edema is due to the deficiency of:",
                options: ["C1", "C8", "C1 inhibitor", "C3 convertase"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A child presents with frequent sinopulmonary infection and telangiectasia of the face. Deficiency of which of the following immunoglobulin class should be investigated?",
                options: ["IgM", "IgG1", "IgG3", "IgA"],
                answer: 3,
                explanation: ""
              },
              {
                q: "In lazy leucocyte syndrome:",
                options: [
                  "There is a defect in neutrophil mobility",
                  "There is peripheral leucopenia",
                  "Both (a) and (b) are true",
                  "Both (a) and (b) are false"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Chronic granulomatous disease is a:",
                options: ["B cell defect", "T cell defect", "Complement defect", "Disorder of phagocytosis"],
                answer: 3,
                explanation: ""
              },

              // ── Transplantation immunology ──
              {
                q: "Heterotopic graft refers to:",
                options: [
                  "Graft placed in an anatomically normal site",
                  "Graft placed in an anatomically abnormal site",
                  "Graft which acts as scaffolding",
                  "Graft from a cadaver"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Graft between two genetically non-identical members of the same species is called:",
                options: ["Autograft", "Isograft", "Allograft", "Xenograft"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Hyperacute rejection is due to:",
                options: ["Pre-formed antibodies", "Lymphokines", "In situ antibody formation", "All of these"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Immunological enhancement results in:",
                options: [
                  "Resistance to infections",
                  "Hyperacute graft rejection",
                  "Slowing down of graft rejection",
                  "Enhanced functioning of thymus"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "In transplant reaction:",
                options: [
                  "White graft response is due to delayed rejection",
                  "Chronic graft rejection responds well to corticosteroids",
                  "Acute rejection occurs within 10 days of transplant",
                  "All of these"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Runt disease is:",
                options: [
                  "Graft rejection",
                  "Graft-versus-host reaction",
                  "Deficient T cell function",
                  "Complement deficiency"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "All the following are used as immunosuppressive agents EXCEPT:",
                options: ["Azathioprine", "Methotrexate", "Levamisole", "Cyclophosphamide"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Antigens that participate in graft rejection are called:",
                options: ["Histocompatibility antigens", "Alloantigens", "Heterologous antigens", "Haptens"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Acute graft rejection is characterised by:",
                options: [
                  "Rejection of graft within hours of implantation",
                  "Appearance of \"White graft response\"",
                  "Damage which occurs due to preformed anti-donor antibodies",
                  "Accumulation of lymphocytes, plasma cells, macrophages and neutrophils, leading to endothelial damage"
                ],
                answer: [1, 3],
                explanation: ""
              }
            ]
          },
          "cvs-blood": {
            name: "CVS & Blood",
            emoji: "🫀",
            questions: [
              // ── Infective endocarditis & bacteremia ──
              {
                q: "A lady presented with fever with chills, splenomegaly, petechiae, and murmur. Echocardiography confirmed mitral regurgitation and nodular lesions on valvular leaflets. Probable clinical condition is:",
                options: ["Endocarditis", "Myocarditis", "Pericarditis", "Pancarditis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A lady with a past history of rheumatic fever had fever with chills for 3 weeks and gradually developed splenomegaly, clubbing, petechiae, neurologic manifestations, and weight loss. Echocardiography showed an oscillating intracardiac mass. The probable causative agent is:",
                options: ["Streptococcus pyogenes", "Viridans streptococci", "Staphylococcus aureus", "Streptococcus pneumonia"],
                answer: 1,
                explanation: ""
              },
              {
                q: "From blood of a subacute bacterial endocarditis patient gram-negative bacilli was isolated. It was slow growing, fastidious, grew better with CO2 and formed pitting colonies. The probable organism is:",
                options: ["Eikenella corrodens", "Pseudomonas species", "Haemophilus influenza", "Diphtheroids"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All of the following are true about acute bacterial endocarditis, EXCEPT:",
                options: [
                  "Involves normal cardiac valve",
                  "Caused by organism of low virulence",
                  "Substantial morbidity and mortality even with the appropriate antibiotic therapy and / or surgery",
                  "Less common type of endocarditis."
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Subacute bacterial endocarditis is commonly caused by:",
                options: ["Streptococcus pyogenes", "Streptococcus viridans group", "Staphylococcus aureus", "Streptococcus pneumonia"],
                answer: 1,
                explanation: ""
              },
              {
                q: "ALL of the following are the typical organism cauing infective endocarditis, EXCEPT:",
                options: ["Viridans streptococci", "HACEK group", "Staphylococcus aureus", "Escherichia coli"],
                answer: 3,
                explanation: ""
              },
              {
                q: "ALL the following are the major criteria in modified duke criteria for the diagnosis of infective endocarditis, EXCEPT:",
                options: [
                  "Typical IE organism isolated from two separate blood cultures",
                  "Persistently positive blood culture with agents other than typical IE organisms in blood culture sets drawn >12 h apart",
                  "Persistently positive blood culture with agents other than typical IE organisms in all of 3 sets, with first and last drawn at least 1 h apart",
                  "Positive blood culture for Coagulase negative staphylococcus isolated from single blood culture bottle",
                  "Single positive blood culture for Coxiella burnetii or phase I IgG antibody titer of >1:800"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following is the most common cause of native valve infective endocarditis?",
                options: ["Staphylococcus aureus", "Coagulase negative Staphylococcus", "Viridans streptococci", "Streptococcus pyogenes"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is the most common cause of community acquired native valve infective endocarditis?",
                options: ["Staphylococcus aureus", "Coagulase negative Staphylococcus", "Viridans streptococci", "Streptococcus Pyogenes"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The commonest cause of prosthetic valve endocarditis is:",
                options: ["Staphylococcus aureus", "Coagulase negative Staphylococcus", "Viridans streptococci", "Enterococcus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A Middle aged man presented with fever and anemia. Laboratory tests showed evidence of haemolysis. The probable cause can be.",
                options: ["HIV", "Hepatitis C Virus", "Malaria", "Schistomiasis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A lady underwent septic abortion. She receiving piperacillin tazobactam thrice daily IV since 2 days. Since she is febrile and he BP is low, blood culture is being planned. Best way to collect is:",
                options: [
                  "Just after the antimicrobial agent aministered.",
                  "After the completion of antibiotic course.",
                  "Just before the next dose of antimicrobial agent.",
                  "To stop antibiotics for 24 hours and then collect."
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "An adult patient is advised blood culture. You are monitoring the collection of a blood sample by a newly appointed technician. among the following steps performed by the tecnihcian, which one would you consider inappropriate and correct the technician?",
                options: [
                  "70% isopropyl and povidone iodine for decontamination",
                  "5 cm area decontaminated with circular motions feom center to periphery",
                  "sample is injected into culture bottle immediately after collection",
                  "4 mL of blood sample is collected"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Pathogenic organisms are released into the bloodstream at a fairly constant rate in all of the following conditions, EXCPECT:",
                options: ["Septic shock", "Rheumatic fever", "Acute endocarditis", "During the early stage of enteric fever"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Most cases of clinically significant bacteremia are of extravascular origin. Which of the following is the most common portal of entry for bacteremia?",
                options: ["Genitourinary tract", "Respiratory tract", "Abscesses", "Surgical wound infections"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The primary mechanism of septicemic shock in Escherichia coli infection is:",
                options: ["Bacterial Invasion", "Endotoxin", "Exotoxins", "Bacterial enzymes"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Antiseptic to be used for decontamination of skin before collecting blood for culture is:",
                options: ["70% isopropyl alcohol and chlorhexidine", "70% isopropyl alcohol", "Chlorhexidine", "Povidone – iodine"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Volume of blood to be collected for adults for culture is:",
                options: ["3-5 mL", "5-6 mL", "8-10 mL", "10-15 mL"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All are true regarding collecting blood for culture, EXCEPT:",
                options: [
                  "Inoculated broth bottles to be stored in refrigerator if 2-4 hours delay is expected.",
                  "2-3 blood culture sets are ideal",
                  "Each set comprises of an aerobic and an anaerobic broth bottle",
                  "Collected blood is directly inoculated at bedside into the blood culture bottle"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following are examples of automated blood culture system, EXCEPT:",
                options: ["BACTEC", "BacT/ALERT", "VIRTUO", "VITEK"],
                answer: 3,
                explanation: ""
              },

              // ── Enteric fever / Salmonella ──
              {
                q: "A patient develops fever which rises gradually to a higher level with every spike; then falls down, but does not touch normal. The probable diagnosis is:",
                options: ["Leptospirosis", "Dengue", "Typhoid fever", "Brucellosis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A girl aged 11 years is admitted with fever with chills, abdominal pain. Hepatosplenomegaly and relative bradycardia since 5 days. Investigation useful is:",
                options: ["Widal test", "Blood culture", "Urine culture", "Vi antibody detection"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A girl aged 6 years with stepladder fever, vomiting, and hepatosplenomegaly has been on antibiotics for 5 days. Blood culture yielded no growth as on the 3rd day of incubation. Next best investigation to rule out enteric fever is.",
                options: ["stool culture", "Bone marrow culture", "Urine culture", "Culture from rose spots"],
                answer: 1,
                explanation: ""
              },
              {
                q: "In a child with fever and splenomegaly for 5 days, Widal test showed raised Salmonella Typhi \"O\" antibodies (Titer 80) and Salmonella Paratyphi \"AH\" antibodies (Titer 80). Best next course of action is:",
                options: [
                  "Rules out typhoid as titers are insignificant",
                  "Repeat the Widal test immediately to rule out technical error.",
                  "Perform blood culture now and repeat the Widal test after one week",
                  "Treat as confirmed typhoid"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Following are true about Vi antibodies, EXCEPT:",
                options: [
                  "Titers are low hence not used in Widal test",
                  "Absence in proven typhoid case indicates poor prognosis",
                  "Used in vaccine",
                  "Persistence after convalescence indicates good prognosis"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Antibodies against which of the following antigen appear early following infection with Salmonella Typhi?",
                options: ["Vi antigen", "O antigen", "H antigen", "Capsular antigen"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All are true about Salmonella Typhi \"H\" antigen, EXCEPT:",
                options: [
                  "It confers motility to the bacteria",
                  "Less immunogenic than \"O\" antigen",
                  "H antibody appears late, disappears late: Indicates convalescent stage",
                  "Serogroups are differentiated into serotypes based on H antigen"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Vi antigen is expressed by all of the following, EXCEPT:",
                options: [
                  "Salmonella Typhi",
                  "Salmonella Paratyphi A",
                  "Salmonella Dublin",
                  "Citrobacter freundii (the Ballerup – Bethesda group)"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Salmonella Typhi is the causative agent of typhoid fever. The infective does of S.Typhi:",
                options: ["One bacillus", "10³ -10⁶ bacilli", "10⁹-10¹⁰ bacilli", "1-10 bacilli"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Salmonella Typhi enters into GIT through:",
                options: [
                  "Intra epithelial lymphocytes",
                  "Columnar epithelial cells lining GI mucosa",
                  "M cells",
                  "Mucosa associated lymphoid tissue"
                ],
                answer: 2,
                explanation: ""
              },

              // ── Rickettsia, typhus & Bartonella ──
              {
                q: "Several inmates of a prison had developed fever, sever myalgia, non-itchy rash which first appeared on trunk and later involved the entire body except for face, palms and soles. On inquiry, he gave a history of being exposed to louse in last week. The probable diagnosis is:",
                options: ["Measles", "Epidemic typhus", "Endemic typhus", "Typhoid"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Several inmates of a prison had developed fever, severe myalgia, and a non – itchy rash that first appeared on the trunk and later involved the entire body except for the face, palms, and soles. Laboratory diagnosis of this clinical condition is done by:",
                options: ["Blood culture", "Weil – Felix test", "Paul Bunnel test", "Widal test"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Several inmates of a prison had developed fever, severe myalgia, and a non-itchy rash which first appeared on the trunk and later involved the entire body except for the face, palms, and soles. He had a history of exposure to an insect one week ago. The treatment of choice for this clinical condition is:",
                options: ["Chloramphenicol", "Ceftriaxone", "Doxycycline", "Ciprofloxacin"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A person has developed fever, headache, myalgia, anorexia, and rash (involving the trunk more often than the extremities). The Weil-Felix test was negative. He had a history of exposure to an insect one week ago. The probable diagnosis is:",
                options: ["Epidemic typhus", "Endemic typhus", "Scrub typhus", "Indian tick typhus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A lady from a village near the Western Ghats presented with fever, myalgia, and diarrhea for 4 days. Later, she developed maculopapular rash. Upon examination, the cervical and axillary lymph nodes were enlarged, and an eschar was visible on the left forearm. The clinical condition is:",
                options: ["Epidemic typhus", "Endemic typhus", "Scrub typhus", "Indian tick typhus"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Bacillary angiomatosis is an angioproliferative disorder characterized by neovascular lesions involving skin and other organs. Which of the following is the causative agent of this clinical condition?",
                options: ["Bartonella henselae", "Bartonella Quintana", "Bartonella bacilliformis", "Both a and b"],
                answer: 3,
                explanation: ""
              },
              {
                q: "All of the following rickettsiae belong to spotted fever group, EXCEPT:",
                options: ["Rickettsia rickettsii", "Rickettsia conorii", "Rickettsia typhi", "Rickettsia akari"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Tick is the vector for following rickettsial infections, EXCEPT:",
                options: ["Rickettsia rickettsii", "Rickettsia akari", "Rickettsia africae", "Rickettsia conorii"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is the causative agent of Oroya fever or Carrion's disease?",
                options: ["Bartonella henselae", "Bartonella quintana", "Bartonella bacilliformis", "Rickettsia akari"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is the causative agent of this Verruga peruana?",
                options: ["Bartonella henselae", "Bartonella quintana", "Bartonella bacilliformis", "Rickettsia akari"],
                answer: 2,
                explanation: ""
              },

              // ── Brucella, Leptospira & Borrelia ──
              {
                q: "In a suspected case of brucellosis who has been administered with antibiotics for 2 days, the best clinical specimen that can be used for culture is:",
                options: ["Blood", "Bone marrow", "CSF", "Joint aspirate"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A butcher presents with 2 weeks history of undulating fever, profuse night sweats and pain abdomen. On examination hepatosplenomegaly was noticed. Blood culture was positive after 10 days and the isolated organism was rapid urease positive. Probable clinical diagnosis is:",
                options: ["Malaria", "Brucellosis", "Leptospirosis", "Enteric fever"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A veterinary surgeon presents with 2-week history of undulating fever, profuse night sweats, and abdominal pain. On examination, hepatosplenomegaly was noticed. Blood culture was positive after 10 days and the isolated organism was rapid urease positive. The most useful serological test in this case is:",
                options: ["Microscopic agglutination test", "Standard agglutination test", "Weil-Felix test", "Paul Bunnell test"],
                answer: 1,
                explanation: ""
              },
              {
                q: "An organism demonstrated in blood sample of a febrile patient was measuring 6-20 um in length and possessed numerous, tightly coiled spirals with hooked ends. The probable organism is:",
                options: ["Treponema pallidum", "Leptospira interrogans", "Borrelia recurrentis", "Borrelia burgdorferi"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A farmer working in paddy fields has fever, malaise since 10 days. Later he developed conjunctival suffusion, hepatosplenomegaly and mild icterus. Has raised urea and creatinine in blood. This clinical picture is suggestive of:",
                options: ["Viral hepatitis", "Leptospirosis", "Brucellosis", "Kala azar"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A man with a recent visit to a forest area develops an annu erythematous skin lesion on his right leg. Later deve fever, malaise, joint pains, and rashes. The Giemsa-stal blood smear shows thin spiral bacilli. The most probable organism is:",
                options: ["Treponema pallidum", "Leptospira interrogans", "Borrelia recurrentis", "Borrelial burgdorferi"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A man with recent visit to a forest area develops an annu. erythematous skin lesion on his right leg. Later deve fever, malaise, joint pains and rashes. The Giemsa-stain blood smear is shown in the following picture. The most probable organism is:",
                options: ["Lyme disease", "Weil disease", "Secondary syphilis", "Relapsing fever"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is incorrect combination of Brucella species and zoonotic source?",
                options: ["B. melitensis-sheep, goat", "B.suis—pigs", "B.abortus-cat", "B. canis-dogs"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The most common mode of transmission of Brucella is:",
                options: ["Eating or drinking unpasteurized/raw dairy products", "Air-borne", "Vector borne", "Man to man"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The classical clinical triad of brucellosis include all, EXCEPT:",
                options: ["Fever", "Arthralgia", "Hepatosplenomegaly", "Maculopapular rash"],
                answer: 3,
                explanation: ""
              },
              {
                q: "In a suspected case of brucellosis, standard agglutination test is positive and standard agglutination test with 2-mercaptoethanol was negative. That indicates:",
                options: ["Acute infection", "Cured status", "Chronic infection", "Convalescence stage"],
                answer: 0,
                explanation: ""
              },

              // ── HIV & NACO strategies ──
              {
                q: "Telangana was a new state officially formed in the year 2014. The state Government wanted to know the seroprevalence of HIV in the state. Which of the following NACO strategy should be used for this purpose?",
                options: ["Strategy I", "Strategy IIA", "Strategy IIB", "Strategy III"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 25-year-old male with history of multiple sex partners is admitted with complaints of unexplained fever, progressive loss of weight, persistent diarrhea and generalized lymphadenopathy for the past 6 months. Which of the following NACO strategy should be used for laboratory diagnosis of HIV/AIDS in this patient?",
                options: ["Strategy 1", "Strategy IA", "Strategy IIB", "Strategy III"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A surgeon wants to know the HIV status of a patient before a planned surgery for hernia. Which of the following NACO strategy should be used for this purpose?",
                options: ["Strategy I", "Strategy IIA", "Strategy IIB", "Strategy III"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A marriage couple wants to know each other's HIV status before their wedding. Which of the following NACO strategy should be used for this purpose?",
                options: ["Strategy I", "Strategy IIA", "Strategy IIB", "Strategy III"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A healthcare worker with exposure to a sharp used for known HIV reactive patient was started on postexposure prophylaxis 48 hours after the exposure. The best test suggested to detect the possibility of transmission at the earliest",
                options: ["Antibody detection by ELISA", "P24 antigen", "RNA PCR", "Western Blot"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A man with AIDS indicator diseases was tested for Hi for the first time. ELISA was reactive for HIV-I, and immunochromatography-based test was non-reactive. Be course of action to resolve the discrepancy as per the NACO guidelines is:",
                options: [
                  "Consider reactive, as ELISA is more specific",
                  "Considered as nonreactive, immunochromatography much sensitive",
                  "Retest after 6 months",
                  "Do a third test with having different principle or a different antigen"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "A young woman donated blood in a blood bank. Duri routine mandatory screening of the donated blood ELISA showed reactive for HIV-1. Appropriate course, action is:",
                options: [
                  "Discard the blood bag",
                  "Repeat the ELISA test with different antigen",
                  "Perform RNA PCR",
                  "Perform immunochromatography-based test"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following modes has the highest risk of transmission of HIV:",
                options: ["Blood transfusion", "Homosexual", "Heterosexual", "Needle/syringe", "Mother to fetus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Most common mode of transmission of HIV:",
                options: ["Blood transfusion", "Homosexual", "Heterosexual", "Mother to fetus", "Needle/syringe"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The risk of transmission of HIV through sexual route per coitus is:",
                options: ["0.1-1%", "1-5%", "5-10%", "15-20%"],
                answer: 0,
                explanation: ""
              },

              // ── Arboviruses & viral hemorrhagic fevers ──
              {
                q: "A man from a village near Shimoga, Karnataka, presented with acute high fever with malaise and frontal headaches, followed by hemorrhagic symptoms. He has a recent history of visiting the nearest forest to collect honey. Probable clinical condition is:",
                options: ["Kyasanur forest disease", "Dengue hemorrhagic fever", "Ebola", "Chikungunya"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A man presented with fever, pain in multiple joints, and a Brownie nose appearance (characterized by hyperpigmentation over the centrofacial area). Probable diagnosis is:",
                options: ["Dengue", "Ebola virus disease", "Chikungunya", "Kyasanur Forest"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Viral hemorrhagic fevers (VHF) are caused by all of us following viruses, EXCEPT:",
                options: ["Dengue virus", "Yellow fever virus", "Ebola virus", "Zika virus"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Common characters of arboviruses include all, EXCEPT:",
                options: [
                  "Enveloped RNA viruses",
                  "Infected humans are the primary reservoirs",
                  "Geographically restricted",
                  "Biologically transmitted by insect vectors"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Arboviruses transmitted by bite of Aedes aegypti include all, EXCEPT:",
                options: ["Japanese B encephalitis virus", "Dengue virus", "Yellow fever virus", "Zika virus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Hemorrhagic fever is caused by:",
                options: ["Yellow fever virus", "Zika virus", "Chandipura virus", "Ganjam virus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Kyasanur Forest disease virus is transmitted by:",
                options: ["Mite", "Louse", "Hard tick", "Soft tick"],
                answer: 2,
                explanation: ""
              },
              {
                q: "In dengue hemorrhagic fever, the minimum number of petechial spots per square inch area in cubital fossa is:",
                options: [">5", ">10", ">15", ">20"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A boy has abrupt onset of high fever, maculopapular rashes over the chest and upper limbs, severe frontal headache and myalgia. He attended a festival one week back where had an exposure to Aedes mosquito. Probable clinical diagnosis is:",
                options: ["Ebola virus disease", "Dengue", "West Nile fever", "Kyasanur forest disease"],
                answer: 1,
                explanation: ""
              },
              {
                q: "In dengue shock syndrome, which of the following feature is an indicator of shock?",
                options: ["Hepatomegaly", "Pulse pressure <20 mm Hg", "Thrombocytopenia", "Retro-orbital pain"],
                answer: 1,
                explanation: ""
              },

              // ── Malaria & Babesia ──
              {
                q: "Appearance of fever paroxysm every 72 hours (Quartan periodicity of malaria) is seen in infection with:",
                options: ["Plasmodium vivax", "Plasmodium falciparum", "Plasmodium malariae", "Plasmodium ovale"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is the infective form of the malari parasite to man when transmitted by mosquito bite?",
                options: ["Merozoite", "Sporozoite", "Trophozoite", "Gametocyte"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is the infective form of the malaria parasite to man when transmitted by blood transfusion?",
                options: ["Merozoite and trophozoites", "Sporozoite", "Gametocyte", "All of the above"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A lady with high grade fever, chills, and splenomegaly became delirious. Peripheral blood smear showed multiple ring forms inside the parasitized RBCs. The clinical condition is:",
                options: ["Meningitis", "Cerebral malaria", "Pernicious malaria", "Trypanosomiasis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 21-year-old boy with high-grade fever with chills and splenomegaly became delirious. Peripheral blood smear showed sickle-shaped forms inside the RBCs. The probable causative agent is:",
                options: ["Plasmodium vivax", "Plasmodium falciparum", "Plasmodium malariae", "Plasmodium ovale"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A malaria patient develops sudden rise in fever and star passing dark urine after starting new malaria medicine. The following statement about this phenomena are correct EXCEPT:",
                options: [
                  "Dark urine due to hemoglobinuria",
                  "It is precipitated by the antimalarial drug chloroquine",
                  "Hemolysis occurs due to autoimmune mechanism",
                  "Associated with falciparum malaria"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "A person is diagnosed with malaria. Peripheral smear stud has shown Plasmodium vivax. Which of the following is t correct treatment for this case?",
                options: [
                  "Chloroquine (over three days)",
                  "Primaquine (single dose)",
                  "Chloroquine (3 days) + primaquine (single dose)",
                  "Chloroquine (3 days) + primaquine (for 14 days)"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 40-year-old man presented with fever, chills, an splenomegaly. Peripheral smear showed ring forms insid RBCs arranged in tetrads. The causative organism is:",
                options: ["Plasmodium falciparum", "Plasmodium vivax", "Plasmodium malariae", "Plasmodium ovale", "Babesia microti"],
                answer: 4,
                explanation: ""
              },
              {
                q: "A 40-year-old man presented with fever with chills and splenomegaly. Peripheral smear showed ring forms inside RBCs arranged in tetrads. The causative organism in transmitted by the bite of:",
                options: ["Mite", "Sandfly", "Soft tick", "Hard tick"],
                answer: 3,
                explanation: ""
              },

              // ── Kala azar / Leishmaniasis ──
              {
                q: "A child from Bihar presented with fever, progressive weight loss and painless gradual distension of abdomen since 2 months. He had hepatosplenomegaly and blood investigations showed pancytopenia and hypergammaglobulinemia. What is the most probable clinical condition?",
                options: ["Malaria", "Typhoid", "Kala azar", "Brucellosis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 23-year-old female from Jharkhand presented with fever, hyperpigmentation on face, progressive weight loss, and painless gradual distension of abdomen since 2 months. He had hepatosplenomegaly, and blood investigations showed pancytopenia and hypergammaglobulinemia. What is the infective form of this etiological agent for humans?",
                options: ["Amastigote", "Promastigote", "Trypomastigote", "Metacyclic trypomastigote"],
                answer: 1,
                explanation: ""
              },
              {
                q: "63-year-old man from Bihar presented with high-grade fever, hyperpigmentation on hands, feet, and abdomen, progressive weight loss, and painless gradual distension of the abdomen since 2 months. He had hepatosplenomegaly and blood investigations showed pancytopenia and hypergammaglobulinemia. What is the mode of transmission of the etiological agent of this clinical condition?",
                options: [
                  "Bite of reduviid bug",
                  "Bite of sandfly",
                  "Rubbing of the feces of reduviid bug on abraded skin",
                  "Bite of tsetse fly"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "A man from Darbhanga (Bihar) had fever and splenomegaly for one month along with weight loss. The bone marrow aspirate collected from the patient was subjected to culture on Novy-MacNeal-Nicolle (NNN) medium (picture). What is true about this test?",
                options: [
                  "Inoculated specimens should be incubated at ambient temperature (24-26°C) and examined weekly for 4 weeks before declared as negative",
                  "Amastigote forms are demonstrated in culture fluid microscopy",
                  "Promastigote forms are demonstrated in culture fluid microscopy",
                  "Culture is found to be positive in 75% of cases"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "A man from South America had a painful subcutant nodule on the face and unilateral painless ed of the eyelid. Subsequently, he developed hepatosplenomegaly, and lymphadenopathy. peripheral blood smear examination showed approximately 20 um C-shaped trypomastigote for probable mode of transmission is:",
                options: [
                  "Rubbing of the reduviid bug's feces on skin",
                  "Bite of a reduviid bug",
                  "Bite of sandfly",
                  "Bite of the tsetse fly"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Vector for leishmaniasis:",
                options: ["Sandfly", "Reduviid bugs", "Tsetse fly", "Anopheles mosquito"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Amastigote form of Leishmania donovani resides in the:",
                options: [
                  "Gastrointestinal tract of insect vector",
                  "Salivary gland of mosquito",
                  "Cells of reticuloendothelial system",
                  "NNN culture media"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "All are true about visceral leishmaniasis in India, EXCEPT:",
                options: [
                  "Leishmania donovani is the most common species",
                  "Leishmaniasis in India is zoonotic",
                  "Vector is Phlebotomus argentipes",
                  "Young adults are affected"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "All are true about post-kala-azar dermal leishmaniasis (PKDL), EXCEPT:",
                options: [
                  "Nonulcerative lesion of skin",
                  "Occurs in 2-50% of visceral leishmaniasis",
                  "Amphotericin B is the drug of choice",
                  "Heals quickly with treatment"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "All are true about direct microscopy for the diagnosis of visceral leishmaniasis, EXCEPT:",
                options: [
                  "LD bodies containing promastigote forms are the diagnostic forms",
                  "Splenic biopsy is the most sensitive in demonstrating the diagnostic form",
                  "Bone marrow is the most preferred sample to demonstrate",
                  "Buffy coat examination is useful in HIV infected persons"
                ],
                answer: 0,
                explanation: ""
              },

              // ── Filariasis ──
              {
                q: "A person from Uttar Pradesh presents with high-grade fever, enlargement of axillary and inguinal lymph nodes, which are firm, discrete, tender, funiculitis and epididymitis. The clinical condition is caused by:",
                options: ["Brugiamalayi", "Wuchereria bancrofti", "Plasmodium falciparum", "Leishmania donovani"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A person from Bihar presents with high-grade fever, enlargement of axillary and inguinal lymph nodes, which are firm, discrete, tender and has features of epididymitis and hydrocele. The thick and thin peripheral blood smear is likely to show:",
                options: [
                  "Banana shaped gametocytes in RBCs",
                  "Amastigotes inside the phagocytic cells",
                  "Microfilaria with tail tip pointed, free of nuclei",
                  "Microfilaria with tail tip blunt, nuclei extended up to tail tip"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "A clinically suspected case of filariasis, microfilaria may not be demonstrated in spite of DEC provocation dose. This may be because of the following reasons, EXCEPT:",
                options: [
                  "Occult filariasis",
                  "Chronic filariasis",
                  "Acute Adenolymphangitis stage",
                  "Subperiodic strains of Wuchereriabancrofti"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "A person presents with high-grade fever, enlargement of axillary and inguinal lymph nodes, which are firm, discrete, tender and has features of epididymitis. The probable diagnosis is:",
                options: ["Malaria", "Kala azar", "Filariasis", "Trypanosomiasis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A parasite causes swelling of legs and hydrocele. Iti commonly transmitted by:",
                options: ["Culex fatigans", "Anopheles", "Mansonia", "Aedes aegypti"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following microfilaria comes to peripher blood in the day time?",
                options: ["Brugiamalayi", "Wuchereria bancrofti", "Loa loa", "Brugiatimori"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following microfilaria does not shor periodicity?",
                options: ["Brugia malayi", "Wuchereria bancrofti", "Loa loa", "Oncocerca volvulus"],
                answer: 3,
                explanation: ""
              },
              {
                q: "All are true about life cycle of filarial parasite, EXCEPT:",
                options: [
                  "Man is intermediate host",
                  "Mosquito is definitive host",
                  "Culex bites at night, whereas Aedes bites in daytime",
                  "Microfilaria are infective stage for humans"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "All are true about occult filariasis, EXCEPT:",
                options: [
                  "Due to hypersensitivity reaction to microfilaria antigen",
                  "Microfilaria are filtered, lodged and destroyed in the lu",
                  "Microfilaria are demonstrable in blood collected betw 9pm and 4 am only",
                  "Presents as tropical pulmonary eosinophilia"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "All are true about antigen detection test for filariasis, EXCEPT:",
                options: [
                  "Antigens can be detected in daytime",
                  "Antigen detection methods are not available for Bl infection",
                  "Antigens cannot differentiate the current from past infection",
                  "More sensitive than smear microscopy"
                ],
                answer: 2,
                explanation: ""
              },

              // ── Fungal bloodstream & systemic mycoses ──
              {
                q: "A patient with high grade fever and low neutrophil coun was admitted to hospital. He was kept on broad spectrun antibiotic since 1 week, but did not respond. Gram stair of the flagged blood culture bottle (BacT/ALERT) showed gram-positive oval budding yeast cells. The etiological agent is:",
                options: ["Candida species", "Cryptococcus species", "Trichosporon species", "Malassezia species"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A lady from America had developed flu-like illness. She has pulmonary infiltrates in the chest X-ray with hilar and mediastinal lymphadenopathy. Sputum culture reveal yeast form at 37°C and mold form (septate thin hyphae with tuberculate macroconidia) obtained at 25°C. This confirm the organism as:",
                options: [
                  "Histoplasma capsulatum",
                  "Paracoccidioides brasiliensis",
                  "Cryptococcus neoformans",
                  "Coccidioides immitis"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "A man from a village on the banks of Mississippi River presented with fever, breathlessness and productive cough for 2 weeks. Verrucous skin lesions were observed on his limbs and chest. Microscopic examination o brochoalveolar lavage showed broad based budding yeast cells. The probable etiological agent is.",
                options: ["Histoplasma capsulatum", "Blastomyces dermatitidis", "Cryptococcus neoformans", "Candida albicans"],
                answer: 1,
                explanation: ""
              },
              {
                q: "An elderly man has chronic cough with expectoration with chest radiography showing bilateral lower lobe fibrosis Sputum ZN smear is negative and aerobic bacterial culture grew no pathogens. Sputum microscopy reveals round thick-walled yeasts, with multiple narrow-necked buds attached circumferentially (pilot wheel appearance). The probable clinical diagnosis is:",
                options: ["Histoplasmosis", "Cryptococcosis", "Coccidioidomycosis", "Paracoccidioidomycosis"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Blood culture from a diabetic patient with features of seps yielded gram positive budding yeast cells. The organs. was identified as Candida krusei using VITEK. Which ofth following antifungal needs to be avoided in this case?",
                options: ["Liposomal amphotericin B", "Caspofungin", "Fluconazole", "Anidulafungin"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Commonest fungus causing bloodstream infection is:",
                options: ["Candida species", "Cryptococcus species", "Malassezia species", "Trichosporon species"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All of the following tests are useful in identifying Candida species, EXCEPT:",
                options: [
                  "Germ tube test",
                  "Dalmau plate culture",
                  "Growth on CHROMagar",
                  "Growth at 25°C and 45°C to show different morphological forms"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "The colonies of Candida grown on Sabouraud dextrose agar are inoculated on to serum and incubated. Then a wet mount is screened, which showed tube like elongation of yeast cells. It is suggestive of:",
                options: ["Candida tropicalis", "Candida albicans", "Candida parapsilosis", "Candida glabrata"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The following methods are used for the rapid and reliable species identification of Candida, EXCEPT:",
                options: ["Chromagar medium", "Vitek2", "MALDI-TOF", "PCR"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is a marker of invasive fungal infection?",
                options: ["B-d-Glucan assay", "Specific cell wall mannan", "Capsular antigen", "Galatomannan antigen"],
                answer: 0,
                explanation: ""
              }
            ]
          },
          "git-hepatobiliary": {
            name: "GIT & Hepatobiliary",
            emoji: "🩺",
            questions: [
              {
                q: "A tourist gives history of consuming raw selfish followed by watery diarrhea, Gram staining reveals, Gram-negative, TCBS green color colonies seen. The most likely bacteria is-",
                options: ["Campylobacter jejuni", "Vibrio parahaemolyticus", "Enterotoxigenic E. coli", "Giardia lamblia"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 35-year-old male patient with history of step ladder fever, diarrhoea and constipation for 5 days presents to a clinic with altered sensorium. Blood culture reveals Non lactose fermenting colonies. The drugs used in empirical therapy are all except-",
                options: ["Ceftriaxone", "Ciprofloxacin", "Azithromycin", "Chloramphenicol"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 25-year-old woman working in a tea-estate presents to OPD with pallor, dysponea and pruritic serpiginous skin rash on the ankle. The most likely parasite is-",
                options: ["Hookworm", "Roundworm", "T.trichiura", "H.nana"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A middle-aged man presents with fever and abdominal tenderness, US abdomen shows hypoechoic lesion in right lobe of liver with homogenous content. The probable lab diagnosis is-",
                options: ["Liver abscess", "Hepatoma", "Hydatid cyst", "Secondaries"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 25-year-old man presents with high grade fever and right abdominal tenderness; US abdomen shows hepatomegaly with hypoechoic lesion in right lobe of liver with homogenous content. Aspirate shows anchovy sauce pus. The probable lab diagnosis is-",
                options: ["Amoebic liver abscess", "Hepatatoma", "Hydatid cyst", "Secondaries"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 25-year-old woman presents with pain right abdominal region, US abdomen shows space occupying cystic lesion in right lobe of liver On surgical excision three layered cyst with brood capsule was seen. The probable lab diagnosis is-",
                options: ["Amoebic liver abscess", "Toxocara", "Hydatid cyst", "Fasciola"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A person with portal hypertension, hepatomegaly, splenomegaly shows Symmers pipestem fibrosis in biliary tract. Most likely diagnosis is-",
                options: ["S. mansoni", "S. hematobium", "F. buski", "P. westermanii"],
                answer: 0,
                explanation: ""
              },
              {
                q: "In a summer camp 10 children developed fever, nausea, vomiting for 2-3 days. 4 had icterus in the next 6days. The most probable diagnosis is –",
                options: ["Hepatitis B", "Hepatitis C", "Hepatitis A", "Hepatitis D"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Assertion & Reasoning:\nAssertion (A): V. cholerae causes 'Rice water stool\"\nReasoning (R): Cholera toxin leads to increased cAMP",
                options: [
                  "Both A & R are true, and R is the correct explanation of A",
                  "Both A & R are true, and R is not the correct explanation of A",
                  "A is true, but R is false",
                  "A is false, but R is true"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Parasite causing B 12 deficiency anemia is-",
                options: ["D. latum", "A. duodenale", "N. americanus", "T. trichiuria"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Multiple Completion type-\nWhich of the following are characteristics of HBV-\n1. DNA virus\n2. Enveloped virus\n3. Blood borne virus\n4. Oncogenic virus",
                options: [
                  "Only 1,2,3 are correct",
                  "Only 1 & 3 are correct",
                  "Only 2 & 4 are correct",
                  "All four are correct"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Multiple Completion type-\nA 20-year-old has undergone screening for blood borne infection. Which is an antigen for HBV infection?\n1. HBsAg   2. NS1 Ag   3. P-17 Ag   4. HeAg",
                options: [
                  "1 & 2 are correct",
                  "1 & 4 are correct",
                  "2 & 3 are correct",
                  "All four are correct"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Assertion & Reasoning:\nAssertion (A): Hookworm causes anemia\nReasoning (R): Hookworm leads to reduced iron absorption",
                options: [
                  "Both A & R are true, and R is the correct explanation of A",
                  "Both A & R are true, and R is not the correct explanation of A",
                  "A is true, but R is false",
                  "A is false, but R is true"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "30-year-old tea estate worker has anemia following hookworm infection, The most likely pathogenesis is-",
                options: ["Megaloblastic", "Microcytic hypochromic", "Hemolytic", "Nutritional"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A child was being evaluated for anemia and growth retardation. Stool examination reveals barrel shaped, bile-stained eggs with mucous plugs. The most likely parasite is-",
                options: ["T.trichiura", "E.vermicularis", "Ascaris lumbricoides", "H. nana"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A HIV positive patient is infected by S. stercoralis, on stool examination the most likely morphological form seen is-",
                options: ["Larvae", "Cyst", "Decorticated Egg", "Fertilized Egg"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 50-year-old female patient, with esophageal varices and portal hypertension presents to Gastroenterology OPD. Stool examination reveals bile-stained oval eggs with lateral knob. Most likely pathogen is-",
                options: ["S. mansoni", "S. japonicum", "S. hematobium", "F. buski"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 56-year-old male patient visits medicine OPD with complains of intermittent dysentery for 3 to 4 months. Mild hepatosplenomegaly is seen. Stool examination reveals bile-stained oval eggs with lateral spine-",
                options: ["S. mansoni", "S. japonicum", "S. hematobium", "F. buski"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 23-year-old college student presents to the OPD with foul smelling greasy stool. He also complains of flatulence. Stool examination reveals motile trophozoites with falling leaf motility",
                options: ["G.lamblia", "B. coli", "E. histolytica", "E. coli"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 25-year-old male with acid-peptic disease underwent endoscopy in the gastro enterology department. Silver staining reveals spiral bacilli and urease breath test is positive. The most likely pathogen is-",
                options: ["S.minus", "Borrelia", "C.jejuni", "H.pylori"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 60-year-old male patient is diagnosed with Hepato Cellular Carcinoma. Serology is positive for HBSAg Antigen. The following statement is true for the pathogen responsible-",
                options: [
                  "It is a DNA virus",
                  "It is not a blood borne virus.",
                  "Carrier stae is rare",
                  "There is no vaccine available."
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "A liver biopsy of a patient with Hepato Cellular Carcinoma reveals HCV DNA. The following statement is true-",
                options: [
                  "It is a DNA virus",
                  "It is associated with chronic carrier state.",
                  "It is not transmitted parenterally.",
                  "It is non-enveloped virus"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "A HIV positive female aged 32 years visit the Medicine OPD with complains of diarrhea and weight loss. Fresh stool examination reveals 200um motile larvae. The most likely pathogen is-",
                options: ["S.stercoralis", "Hookworm", "T.spiralis", "E.vermicularis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A HIV positive male patient of 34 years gives history of migrating pruritic raised erythematous lesions. Patient also has mild diarrhea. Most likely parasitic form seen in the stool sample is-",
                options: ["Egg", "Trophozite", "Cyst", "Larva"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Following a school picnic 20 children complained of nausea, vomiting and jaundice. The most likely virus responsible is-",
                options: ["HDV", "HAV", "HBV", "HCV"],
                answer: 1,
                explanation: ""
              },
              {
                q: "In an apartment complex 8 families of 16 developed nausea, vomiting, and jaundice. On investigation sewage water pipeline mixing with potable water was seen. The most likely virus responsible is-",
                options: ["HEV", "HCV", "HDV", "HBV"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A village reported sudden cases of diarrhea with 50 villagers developing rice water stool. The most likely transport media lab must prepare in bulk is-",
                options: ["Alkaline peptone water", "Sacchs Buffered glycerol saline", "Amies transport media", "GNB broth"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Stool sample from a patient with severe diarrhoea revealed darting motility, TCBS media revealed yellow-colored colonies. Most likely pathogen is-",
                options: ["E.coli- EPEC", "V. cholerae", "E.coli- ETEC", "C.jejuni"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Following consuming meat burger an 8-year-old child developed petechial rashes on the skin, renal failure, and seizures. The most likely pathogen is-",
                options: ["EIEC", "EHEC", "EPEC", "ETEC"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Following consuming meat burger an 8-year-old child developed petechial rashes on the skin, renal failure, and seizures. The pathogen associated was O157H7 EHEC. The associated syndrome is-",
                options: [
                  "Hemolytic Uremic Syndrome",
                  "Fitz-Hugh Curtis Syndrome",
                  "Gullian Barre Syndrome",
                  "Water House Fedrich syndrome"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 32-year-old male patient has rose patches on skin, step ladder fever, leucopenia, hepatosplenomegaly for 4 days. The best sample to isolate Salmonella is-",
                options: ["Serum", "Stool", "Blood", "Urine"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 32-year-old male patient has rose patches on skin, step ladder fever, leucopenia, hepatosplenomegaly, alternate diarrhea, and constipationsince 14days. Ideal selective media for stool sample is-",
                options: ["Wilson & Blair Media", "TCBS", "PT media", "LJ Media"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Super carriers are differentiated from simple carriers by-",
                options: [
                  "Absence of HBSag antigen",
                  "Presence of HBeAg and ABV DNA",
                  "Presence of IgG HBcAg",
                  "Presence of IgM HBcAg"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "A lab technician has documented proof of HBV vaccine 6 years back. The best course to protect him against HBV virus is-",
                options: ["Restart vaccine series", "Complete vaccination series", "Estimate HBs Ab titer", "Give a booster dose"],
                answer: 1,
                explanation: ""
              },
              {
                q: "An apparently healthy pregnant lady developed fever jaundice and died. There is no history of high-risk behavior or blood transfusion. Most likely pathogen is-",
                options: ["HBV", "HCV", "HEV", "HDV"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A person with HBV infection is considered infectious as long as the following marker is isolated in serum-",
                options: ["HBSAg", "HBeAg", "Anti HBcAg", "Anti HbsAg"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Military troop of 20 soldiers developed jaundice, nausea, and vomiting. Anti-HAV IgM is positive in the serum. Treatment of choice is-",
                options: ["Tenofovir", "Interferon alfa", "Symptomatic", "Telbivudine"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 56-year-old veterinary surgeon presents to the OPD with fever and right abdominal pain. US abdomen reveals cystic lesion with 'water lily'like structure. The definitive host for the pathogen is-",
                options: ["Dog", "Sheep", "Man", "Fish"],
                answer: 0,
                explanation: ""
              }
            ]
          },
          "skin-soft-tissue": {
            name: "Skin & Soft Tissue",
            emoji: "🧫",
            questions: [
              // ── Scenario-based: viral exanthems, toxins & pyogenic infections ──
              {
                q: "A 28 yrs old menstruating woman appeared in the emergency room with the following signs & symptoms- fever, 104 deg C fever, WBC -16000, BP 90/65mmHg. A scarlatiniform rash on her trunk, palms & soles, extreme fatigue, vomiting & diarrhoea. The patient described in this case most likely has which of the following",
                options: ["Chicken pox", "GB syndrome", "SSS", "TSS"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 9 year boy presented with fever and nonspecific symptoms followed by a distinctive rash on the cheeks. which of the following viruses may cause this disease",
                options: ["HSV", "Parvo", "Rubella", "Rubeola"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A viral organism was isolated from a painful blister on the lip of a teenage girl. The agent was found to contain double standard linear DNA and was enveloped. the paient had a similar sore approximately 2 months ago. which of the following is the most likely causative organism",
                options: ["Adeno", "Coxsackie", "HS type 1", "Herpes Zoster"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A diabetic patient developed cellulitis due to S.aureus which was found to be MRSA on the AST. All the following antibiotics will be appropriate except",
                options: ["Vancomycin", "Imipenem", "Teicoplanin", "Linezolid"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A woman had a high fever, hypotension & a diffuse macular rash. when all cultures showed no bacterial growth, a diagnosis of toxic shock syndrome was made. Regarding the mechanism by which the toxin causes this disease, which one of the following is least accurate?",
                options: [
                  "The toxin is not processed with in the macrophage",
                  "The toxin binds to both the class II MHC protein & the T cell receptors.",
                  "The toxin activates many CD4 positive T cells & large amount of interleukins are released",
                  "The toxin has an A-B subunit structure. The B subunit binds to the receptor, and the A subunit enters the cells & activates them"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 3year old girl presented to her pediatrician's office with fever, swollen lymph node, & a vesicular rash on her chest and upperarm. The vesicles were at various stages of development: some were newly forming, while some were crusted over. Which of the following infectious agents is the most likely cause of this girl's rash.",
                options: ["Small pox", "Parvovirus B 19", "EBV", "VZV"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 5 year old boy is brought into the clinic with a rash that started on his trunk and now has spread to his face and extremities. Other than the rash, he appeared healthy. his vital signs are temperature of 37.8degC, pulse 100/min, blood pressure 110/80mmhg and respirations 21/min. He started kindergarten 3 weeks ago and mentions that some of his classmates have had a similar rash and had to miss school. A physical exams reveals a rash that is primarily on the boy's abdomen; there are a few lesions on his face and extremities. This child has no history of immunizations. Which of the following is the most likely disease affecting the patient",
                options: ["Chicken pox", "Rubella", "Rubeola", "Shingles"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 5 year old boy is brought into the clinic with a rash that started on his trunk and now has spread to his face and extremities. Other than the rash, he appeared healthy. his vital signs are temperature of 37.8degC, pulse 100/min, blood pressure 110/80mmhg and respirations 21/min. He started kindergarten 3 weeks ago and mentions that some of his classmates have had a similar rash and had to miss school. A physical exams reveals a rash that is primarily on the boy's abdomen; there are a few lesions on his face and extremities. This child has no history of immunizations. Which virus is the most likely cause of this patient's infection?",
                options: ["Rubella virus", "Measles virus", "Herpes Simplex virus", "Varicella Zoster virus"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 35 year old man complains that his left hip is painful after being punctured by a tool when he was at work 4 days ago. After cleaning the wound quickly, he went on about his work. The wound now has pus in it and it is erythematous and swollen. Physical examination reveals a purulent and relatively deep skin lesion with an erythematous swollen region around the puncture that extends upto 2cm from the wound. Asample of the puruleny material obtained from the lesion is cultured on a blood agar plate 7 Gram stained. The resulting colonies are Gram positive cocci in clusters that are beta heolytic, catalase positive, & coagulase positive. Which of the following organisms is the most likely cause of this patient's infection?",
                options: [
                  "Streptococcus pyogenes",
                  "Staphylococcus epidermidis",
                  "Staphylococcus aureus",
                  "Clostridium perfringens"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 55 year old man came to the clinic with complaints of pain on the right lower portion of his ribcage. Physical examination elicits pain to the touch along the intercostal dermatome. Vesicular skin lesions are also observed. which of the following is the most likely cause of this patient's condition?",
                options: ["Herpes Simplex virus 1", "Herpes simplex virus 2", "CMV", "VZV"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A middle aged lady presented with diffuse, spreading, painful red swelling of left leg. Margins were ill defined, and she had fever with chills. The lesion is typically caused by:",
                options: ["Streptococcus pyogenes", "Bacteroides spp", "Clostridium perfringens", "Erysipelothrixrhusiopathiae"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A diabetic lady developed furuncles at the back of her neck that coalesced and spread more deeply, later forming multiple draining sinuses. The Gram stain of the pus is most likely to show:",
                options: ["GPC in chains", "GPC in clusters", "GNB", "GPB"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Hidradenitis is a chronic infection of obstructed apocrine(sweat) glands in the axilla, genital, or perianal areas with intermittent discharge (often foul smelling pus). This condition can be caused by all of the following except",
                options: ["Staphylococcus aureus", "Pseudomonas aeruginosa", "Streptococcus agalactiae", "Bacteroides spp"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A person with a second degree burn develops greenish pus oozing from the burn,s wound. The most likely pathogen is :",
                options: ["Staphylococcus aureus", "Pseudomonas aeruginosa", "Klebsiella oxytoca", "Acinetobacter baumannii"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A lady aged 56 years presented with a non-healing ulcer on the right foot for a month. She is diabetic with poor control of blood agar. Best sample to identify the pathogen is:",
                options: ["Discharge using a swab", "Slough at the floor of the ulcer", "Washings with sterile saline", "Debrided infected tissue"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A newborn developed localized tender blisters andbullae later, leading to exfoliation of skin. Staphylococcal toxin responsible for this condition is:",
                options: ["Epidermolytic toxin", "Panton-Valentine toxin", "Gamma hemolysin", "Toxic shock syndrome toxin"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A man presented with fever, desquamating rash, hypotension. He also has an abscess in gluteal region and pus drained has grown Staphylococcus aureus. The mechanism behing the generalized symptom is:",
                options: ["Toxic shock syndrome toxin", "Panton Valentine toxin", "Exfoliative toxin", "Hemolysin"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A man has developed painful pustular lesion in hairy, moist regions due to infection of the hair follicles. A clinical diagnosis of furuncle(boil) was made. Which of the following biochemical tests is useful for the identification of the most likely causative agent of this condition?",
                options: ["Coagulase test", "CAMP test", "Bile esculin test", "Bacitracin susceptibility test"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A lady breastfeeding a child aged 7 days developed a tender nodular lesion around the nipple with pus pointing. A clinical diagnosis of breast abscess was made. The gram staining of the pus is most likely to show:",
                options: ["GPC in chains", "GPC in clusters", "GNB", "GPB"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A man has swollen left foot, discharging sinuses, and discharge contains granules. Selective culture media used to isolate Actinomycetes and fungi have yielded no growth. The probable causative organisms could be:",
                options: ["Mycobacterium tuberculosis", "Yersinia pestis", "Chlamydophila pneumoniae", "Staphylococcus aureus"],
                answer: 3,
                explanation: ""
              },
              {
                q: "In a neonatal ICU, a cluster of staphylococcal infections with similar antibiotic sensitivity pattern was observed. It was planned to screen healthcare workers of that ICU for Saphylococcal carriage. Ideal body site from where swabs can be collected is :",
                options: ["Anterior nares", "Pharynx", "Throat", "Rectum"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A man has developed recurrent follicular infections in the axilla, which is rich in apocrine glands. A clinical diagnosis of hidradenitis suppurativa was made. The culture of the pus specimen in nutrient agar yielded golden yellow colonies. The selective medium preferred to isolate Staphylococcus aureus is:",
                options: ["Sheep blood agar", "Crystal violet blood agar", "Mannitol salt agar", "MacConkey agar"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Staphylococcus aureus isolated from an abscess was found to be resistant to sefoxitin and sensitive to linezolid, clindamycin and vancomycin. The preferred antibacterial agent is",
                options: ["Cloxacillin", "Clindamycin", "Vancomycin", "Amoxicillin-clavulanic acid"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A person developed a tender, bright red, swollen and indurated peau\"d orange texture of involved skin along with fever and chills. The causative agent of this type of lesion is:",
                options: ["Staphylococcus aureus", "Streptococcus pyogenes", "Clostridium perfringens", "Coagulase negative Staphylococcus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A man developed acute painful skin lesions at the ankle region with minimal erythema at the site of involvement, later the skin became dusky and anesthetized associated with extensive necrosis of subcutaneous tissue, fascia and muscle. This condition is known as :",
                options: ["Erysipelas", "Impetigo", "Necrotizing fasciitis", "Cellulitis"],
                answer: 2,
                explanation: ""
              },

              // ── Skin flora, lesions & soft-tissue infections ──
              {
                q: "Normal resident microbial flora of skin includes all of the following, EXCEPT:",
                options: ["Coagulase-negative staphylococci", "Anaerobic bacteria", "Corynebacterium diphtheriae", "Propionibacterium acnes"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All of the following can produce purpuric lesions, EXCEPT:",
                options: ["Endocarditis", "Meningococcal septicaemia", "Molluscum contagiosum virus", "Dengue virus"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Ecchymosis (extravasation of blood into skin, of size >1 cm) could be due to:",
                options: ["Marburg virus", "Rubella virus", "Cytomegalovirus", "Streptococcus pyogenes"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A person presents with fever and eschar on his forearm. It could be because of:",
                options: ["Yersinia pestis", "Mycobacterium marinum", "Orientia tsutsugamushi", "Epidermophyton floccosum"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A diabetic lady presented with skin lesions that were dry, scaly, itchy, and discoloured (reddish brown) for 2 months. the causative agent could be:",
                options: ["Streptococcus pyogenes", "Corynebacterium minutissimum", "Staphylococcus aureus", "Treponema pallidum"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Nail of a patient is separated from nail bed, becomes green with foul Odour. The causative agent is:",
                options: ["Staphylococcus aureus", "Streptococcus pyogenes", "Pseudomonas aeruginosa", "Bacteroides species"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Fournier's gangrene is a rare and often fulminant necrotizing fasciitis of the perineum and genital region frequently due to:",
                options: ["Staphylococcus aureus", "Pseudomonas aeruginosa", "Mixed aerobic and anaerobic bacteria", "Acinetobacter species"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All are true about the quantitative culture of tissue biopsy specimens in burns, EXCEPT:",
                options: [
                  "Useful to identify the most prevalent organism in a polymicrobial infection",
                  ">105 CFU/g of tissue is indicative of a potentially serious infection",
                  "Cannot differentiate commensals from pathogens with certainty",
                  "Useful to assess the severity of infection"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Chronic draining sinuses may be found in the following infections, EXCEPT:",
                options: [
                  "Malassezia furfur infections",
                  "Nontuberculous mycobacterial infections",
                  "Actinomycosis",
                  "Infections associated with implanted foreign bodies"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "All of the following are preferred samples for culture of infected diabetic foot, EXCEPT:",
                options: [
                  "Aspirated fluid",
                  "Wound swab from the ulcers",
                  "Pus taken from a deep pocket within the wound",
                  "Debrided infected tissue"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Nodular lymphangitis commonly follows superficial inoculation with one of the following organisms, EXCEPT:",
                options: ["Sporothrixschenckii", "Nocardia brasiliensis", "Wuchereriabancrofti", "Francisella tularensis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Myositis is seen in all of the following, EXCEPT:",
                options: ["Kala azar", "Chagas'disease", "Cysticercosis", "Trichinellosis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Reactive polyarthritis is seen in all of the following, EXCEPT:",
                options: ["Yersinia enterocolitica", "Vibrio cholerae", "Shigella flexneri", "Campylobacter jejuni"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The most common cause of acute osteomyelitis is:",
                options: ["Staphylococcus aureus", "Streptococcus pyogenes", "Salmonella Typhi", "Brucella species"],
                answer: 0,
                explanation: ""
              },

              // ── Staphylococcus ──
              {
                q: "All the following are correct regarding the cell wall-associated virulence factor of Staphylococcus aureus and its action, EXCEPT:",
                options: [
                  "Peptidoglycan: Provides rigidity to cell wall",
                  "Clumping factor: Inhibition of opsonization",
                  "Teichoic acid: Adhesion of cocci to mucosal surfaces",
                  "Protein-A: Anti-complementary"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "All of the following are mediated by exfoliative toxin of Staphylococcus aureus, EXCEPT:",
                options: ["Pemphigus neonatorum", "Bullous impetigo .", "Toxic shock syndrome", "Scalded skin syndrome"],
                answer: 2,
                explanation: ""
              },
              {
                q: "True about staphylococcal enterotoxin is:",
                options: [
                  "All strains produce the toxin",
                  "Type B is most common to cause food poisoning",
                  "Produced by the organism after infecting the tissue",
                  "Incubation period is less than 6 hours"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Synergohymenotropic toxins includes:",
                options: [
                  "alpha-hemolysin and panton-valentine toxin",
                  "Beta -hemolysin and panton-valentine toxin",
                  "gamma-hemolysin and panton-valentine toxin",
                  "alpha -hemolysin and Betahemolysin"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Single commonest test used to differentiate Staphylococcus aureus from other species of Staphylococcus is:",
                options: ["Catalase", "Coagulase", "Oxidase", "Gram stain morphology"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The commonest site of colonization of Staphylococcus aureus responsible for nosocomial spread of infection is:",
                options: ["Anterior nares", "Vagina", "C. Axilla", "Perineal skin"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Nosocomial spread of Staphylococcus aureus to patients can take place from:",
                options: ["Hospital staff", "Other patients", "Patient's own endogenous flora", "All of the above"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Staphylococci can be differentiated from streptococci by:",
                options: ["Coagulase test", "Catalase test", "Mannitol fermentation", "Oxidase test"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Staphylococcus aureus isolated from an abscess was found to be sensitive to cefoxitin, penicillin and vancomycin. Then preferred antibiotic is:",
                options: ["Penicillin", "Cloxacillin", "Vancomycin", "Cefoxitin"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Methicillin-resistant Staphylococcus aureus (MRSA) is best detected by performing a disk diffusion test against an antibiotic.",
                options: ["Methicillin", "Cefoxitin", "Oxacillin", "Vancomycin"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Staphylococcus aureus isolated from an abscess was found to be resistant to cefoxitin. All of the above can be given for the treatment of this organism isolated, EXCEPT:",
                options: ["Meropenem", "Vancomycin", "Cotrimoxazole", "Linezolid"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is the LEAST preferred antimicrobial agent for the treatment of methicillin-sensitive S. aureus (MSSA)?",
                options: ["Cloxacillin", "Cephalexin", "Cefazolin", "Vancomycin"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following is the mechanism of methicilin-resistant Staphylococcus aureus (MRSA)?",
                options: [
                  "Alteration in penicillin-binding protein (PBP) to PBP2a",
                  "Overproduction of beta lactamase",
                  "Mutation in porin channel",
                  "Inhibition of protein synthesis"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "About vancomycin resistant Staphylococcus aureus (VRSA), all are true, EXCEPT:",
                options: [
                  "VRSA is mediated due to Van gene",
                  "VISA is due to increased cell wall thickening",
                  "VRSA is more common than VISA",
                  "Fitness cost phenomena is seen in VRSA"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "The most efficient way to prevent hospital spread of S. aureus is by:",
                options: [
                  "Screening of MRSA carriers among hospital staff",
                  "Treatment of carriers is done by use of topical 2% mupirocin",
                  "Stoppage of antibiotic misuse in hospitals",
                  "Ensure proper infection control measures, such as hand hygiene"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Staphylococcus epidermidis, all are true, EXCEPT:",
                options: [
                  "Accounts for 75% of coagulase negative staphylococci (CoNS)",
                  "Phosphatase negative",
                  "Produces biofilm",
                  "Causes stitch abscesses"
                ],
                answer: 1,
                explanation: ""
              },

              // ── Streptococcus ──
              {
                q: "Griffith typing used for group A B-hemolytic streptococci is based on:",
                options: ["M protein", "C carbohydrate antigen", "Peptidoglycan layer", "Capsular polysaccharide antigen"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The emm typing is used to classify:",
                options: ["Family Streptococcaceae", "Beta hemolytic streptococci", "Group A Streptococcus", "Alfa hemolytic streptococci"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following organism produces small (1-2 mm) zone of greenish discoloration surrounding the colonies due to partial lysis of red blood cells?",
                options: ["Viridans streptococci", "Streptococcus pyogenes", "Staphylococcus aureus", "Pseudomonas aeruginosa"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following are the cell wall antigens of Streptococcus pyogenes, EXCEPT:",
                options: ["Lipoteichoic acid", "M protein", "C carbohydrate antigen", "Capsular polysaccharide antigen"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following cell wall component of Streptococcus pyogenes helps in adhesion to pharyngeal epithelial cells?",
                options: ["Lipoteichoic acid", "M protein", "C-carbohydrate antigen", "Peptidoglycan"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following are true about streptolysin-O, EXCEPT:",
                options: [
                  "Strongly antigenic",
                  "Oxygen labile and heat labile",
                  "ASO antibodies are raised following streptococcal pharyngitis",
                  "ASO antibodies (ASO) are raised following streptococcal pyoderma"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Streptococcal pyrogenic exotoxin is responsible for all of the following, EXCEPT:",
                options: ["Rheumatic fever", "Scarlet fever", "Necrotizing fasciitis", "Toxic shock syndrome"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following subtype of streptococcal pyrogenic exotoxin (SPE) is coded by bacteriophage?",
                options: ["SPE-A", "SPE-B", "SPE-C", "All of the above"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following antibody marker is best used for retrospective diagnosis of streptococcal skin infections (pyoderma) and acute glomerulonephritis?",
                options: [
                  "Anti-DNase A antibodies",
                  "Anti-DNase B antibodies",
                  "Anti-DNase C antibodies",
                  "Anti-streptolysin antibodies"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the most common bacterial cause of pharyngitis in children?",
                options: ["Staphylococcus aureus", "Streptococcus pyogenes", "Moraxella catarrhalis", "Coagulase negative Staphylococcus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Streptococcal impetigo (pyoderma): All are true, EXCEPT:",
                options: [
                  "Risk factors include young children, warmer months, tropical climates, poor hygiene",
                  "Most common sites involved are face (nose and mouth) and legs",
                  "Pustular lesions that coalesce to form honeycomb-like crusts",
                  "Lesions are painful and associated with fever"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "As the lesion of necrotizing fasciitis is likely to be polymicrobial, which of the following selective medium is used to isolate Streptococcus pyogenes?",
                options: ["Mannitol salt agar", "Crystal violet blood agar", "Ludlam's medium", "Pike's medium"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following statements is WRONG, regarding molecular mimicry between streptococcal antigen and similar human antigen?",
                options: [
                  "Cell wall C carbohydrate: Cardiac valves",
                  "Hyaluronic acid: Synovial fluid",
                  "Peptidoglycan: Skin lesions",
                  "Cell wall M protein: Glomerular vascular intima"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Serotyping of Streptococcus pyogenes is based on which of the following protein?",
                options: ["M protein", "T protein", "R protein", "Carbohydrate antigen"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Drug of choice for suppurative infections caused by Streptococcus pyogenes is:",
                options: ["Penicillin", "Linezolid", "Cotrimoxazole", "Depends upon antibiotic susceptibility test results"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Streptococcus pyogenes can be differentiated from S.agalactiae by testing susceptibility to:",
                options: ["Optochin", "Bacitracin", "Polymyxin", "Novobiocin"],
                answer: 1,
                explanation: ""
              },
              {
                q: "CAMP test is useful in identification of:",
                options: ["Streptococcus pyogenes", "Streptococcus agalactiae", "Streptococcus pneumoniae", "Viridans streptococci"],
                answer: 1,
                explanation: ""
              },

              // ── Anaerobes & Clostridium ──
              {
                q: "Optimum conditions for growing anaerobic organisms can be achieved by all of the following, EXCEPT:",
                options: [
                  "Mcintosh and Filde's anaerobic jar",
                  "GasPak system",
                  "Anoxomat system",
                  "Candle jar with sealed lid",
                  "Pre-reduced anaerobically sterilized (PRAS) media"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Anaerobic infection with production of black pigment that fluoresce indicates:",
                options: ["Prevotellamelaninogenica", "Actinomyces", "Clostridium bifermentans", "Chromobacteriumviolaceum"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Antibiotic that is useful in suspected anaerobic infection is:",
                options: ["Ciprofloxacin", "Clindamycin", "Azithromycin", "Cotrimoxazole"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Spindle-shaped bacterial pathogen isolated from pelvic abscess in thioglycollate broth is most likely to be:",
                options: ["Bacillus species", "Clostridium species", "Corynebacterium species", "Bacteroides species"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All of the following are known to produce rapidly spreading edematous myonecrosis following crushing type of injury, EXCEPT:",
                options: ["Clostridium perfringens", "Clostridium novyi", "Clostridioides difficile", "Clostridium septicum"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is the causative agent of necrotizing enterocolitis?",
                options: ["Clostridium septicum", "Clostridium novyi", "Clostridium perfringens", "Clostridium bifermentans"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Principle toxin responsible for gas gangrene is:",
                options: ["Alpha toxin", "Theta toxin", "Beta toxin", "Delta toxin"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following are the established agents of gas gangrene, EXCEPT:",
                options: ["Clostridium septicum", "Clostridium novyi", "Clostridium perfringens", "Clostridium bifermentans"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The alpha toxin which is the principal virulence factor of Clostridium perfringens gas gangrene mediates by all of the following mechanisms, EXCEPT:",
                options: [
                  "Phospholipase C and sphingomyelinase activities",
                  "It activates the platelet adhesion molecule GpIIb/IIIa",
                  "Marked vasodilatation",
                  "Direct suppression of myocardial contractility"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "The incubation period of gas gangrene varies depending upon the type of clostridial species involved. What is the incubation period of gas gangrene due to Clostridium perfringens?",
                options: ["10-48 hours", "2-3 days", "5-6 days", ">7 days"],
                answer: 0,
                explanation: ""
              },
              {
                q: "If the gram stain had shown citron bodies, most probable organism would be:",
                options: ["Clostridium septicum", "Clostridium novyi", "Clostridium perfringens", "Clostridium bifermentans"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Treatment of gas gangrene include all of the following, EXCEPT:",
                options: [
                  "Immediate wound closure after application of antiseptics",
                  "Early surgical debridement",
                  "Penicillin and clindamycin",
                  "Passive immunization with anti-a-toxin antiserum"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Anaerobic normal oral flora includes all, EXCEPT:",
                options: ["Actinomyces", "Propionibacterium", "Clostridium perfringens", "Spirochetes"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is an example of gram-positive non-sporing anaerobes?",
                options: ["Actinomyces", "Propionibacterium", "Clostridium perfringens", "Bifidobacterium"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following obligate anaerobe maintains the vaginal acidic pH that prevents colonization of pathogens?",
                options: ["Leptotrichia", "Lactobacillus", "Fusobacterium", "Bacteroides fragilis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Bacteroides fragilis: All are true, EXCEPT:",
                options: [
                  "It is the most common commensal in the human intestine.",
                  "It is the most frequent anaerobe isolated from the clinical specimens",
                  "Non-sporing, gram-positive obligate anaerobe",
                  "Capsular polysaccharide is a major virulence factor"
                ],
                answer: 2,
                explanation: ""
              },

              // ── Leprosy (Mycobacterium leprae) ──
              {
                q: "True about leprosy is:",
                options: [
                  "It is chronic granulomatous disease",
                  "Primarily involves skin, peripheral nerves, upper respiratory tract",
                  "Generation time of the lepra bacilli is 12-13 days",
                  "Incubation period is 5-7 months"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "All are true about multibacillary leprosy, EXCEPT:",
                options: [
                  ">5 skin lesions",
                  "Nerve involvement is seen",
                  "Slit-skin smear positive for lepra bacilli",
                  "Lepromin test positive"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following feature is seen in lepromatous leprosy (LL)?",
                options: [
                  "Bacteriological index 0 to 1+",
                  "Normal humoral immunity",
                  "Hypoesthesia is an early sign",
                  "Lepromin test positive"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Ridley-Jopling classification (1966) for leprosy includes all varieties, EXCEPT:",
                options: ["Lepromatous leprosy", "Indeterminate leprosy", "Borderline leprosy", "Tuberculoid leprosy"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following classification of leprosy includes pure neuritic type?",
                options: [
                  "Ridley-Jopling classification",
                  "Madrid classification",
                  "Indian classification",
                  "MacLennan classification"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following leprosy type has the best prognosis?",
                options: ["Lepromatous leprosy", "Tuberculoid leprosy", "Borderline leprosy", "Indeterminate leprosy"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following statement is FALSE about lepromatous leprosy?",
                options: [
                  "Globi are seen in the smear",
                  "Skin lesions are many, symmetrical with irregular margin",
                  "Nerve involvement is consistent finding and occurs early",
                  "Cell-mediated immunity is compromised"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following statement is FALSE about the skin lesion seen in tuberculoid leprosy (TT)?",
                options: [
                  "One or few skin asymmetrical lesions seen",
                  "Multiple bacilli are seen in slit skin smear",
                  "Lesions appear as hypopigmented, annular macules with elevated borders",
                  "Tendency towards central clearing"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following statement is FALSE about tuberculoid leprosy (TT)?",
                options: [
                  "Cell-mediated immunity is adequate",
                  "Lepromin test is negative",
                  "Humoral immune response is normal",
                  "Patients are least infectious"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following leprosy stage denotes the early unstable cases with one or two hypopigmented macules and definite sensory impairment; however, the lesions are bacteriologically negative?",
                options: ["Lepromatous leprosy", "Tuberculoid leprosy", "Borderline leprosy", "Indeterminate leprosy"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which one of the following is the most common mode of transmission of leprosy?",
                options: [
                  "Nasal droplet infection",
                  "Direct person to person contact",
                  "Fomites such as clothes and linens",
                  "Procedures like tattooing"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "All of the following are true about type 1 lepra reaction, EXCEPT:",
                options: [
                  "Seen in borderline leprosy",
                  "Type III (immune complex-mediated) reaction",
                  "Manifests as Inflammation of previous lesions, new skin lesions and neuritis",
                  "Glucocorticoids are drugs of choice to treat"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "All the statements are TRUE regarding Lepra reaction typeII, EXCEPT:",
                options: [
                  "Seen with lepromatous leprosy",
                  "Predominant TH2 response seen",
                  "Crops of painful erythematous papules which become nodular",
                  "It usually gets subsided after the start of chemotherapy"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "True about transmission of leprosy is:",
                options: [
                  "Nearly 80% spouses of infected persons develop leprosy",
                  "Intimate and prolonged contact is necessary",
                  "Being transmitted through respiratory route, leprosy is highly communicable",
                  "Children have good innate immunity and are disease is uncommon if infection is contacted"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "All statements are true regarding specimen collection for leprosy, EXCEPT:",
                options: [
                  "Slit skin smear is the technique is commonly used",
                  "Total six samples are collected",
                  "Nasopharyngeal swabs are recommended.",
                  "Nasal blow specimen is collected in the early morning"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "In a slit skin smear for leprosy, the percentage of uniformly stained bacilli out of the total number of bacilli counted is called as:",
                options: [
                  "Bacteriological index",
                  "Morphological index",
                  "Solid, fragmented granular rod percentage",
                  "Percentage grade of the smear"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Advantages of cultivating Mycobacterium leprae in foot pads of mouse is all, EXCEPT:",
                options: [
                  "Faster, takes 2-3 weeks of time",
                  "Useful in detecting drug resistance",
                  "Evaluating the potency of drugs",
                  "Detects viability of the bacilli"
                ],
                answer: 0,
                explanation: ""
              }
            ]
          }
        }
      },
      paper2: {
        name: "Paper 2",
        enabled: true,
        chapters: {
          "cns-infections": {
            name: "Central Nervous System Infections",
            emoji: "🧠",
            questions: [
              {
                q: "A 3-year-old child presents with fever, neck rigidity, and irritability. CSF shows neutrophilic pleocytosis, low glucose, and gram-positive diplococci. Most likely organism:",
                options: ["Neisseria meningitidis", "Streptococcus pneumoniae", "Haemophilus influenzae", "Listeria monocytogenes"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A college student presents with fever, petechial rash, and neck stiffness. CSF shows gram-negative diplococci. Diagnosis:",
                options: ["Pneumococcal meningitis", "Tubercular meningitis", "Meningococcal meningitis", "Viral meningitis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 2-month-old infant with bulging fontanelle shows pleomorphic gram-negative rods in CSF. Causative organism:",
                options: ["E. coli", "S. pneumoniae", "N. meningitidis", "H. influenzae"],
                answer: 3,
                explanation: ""
              },
              {
                q: "CSF of a 55-year-old diabetic shows gram-positive rods with tumbling motility. Organism:",
                options: ["Listeria monocytogenes", "Clostridium tetani", "Corynebacterium diphtheriae", "Nocardia asteroides"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 6-year-old unimmunized child with meningitis shows pleomorphic gram-negative bacilli in CSF. Organism:",
                options: ["H. influenzae type b", "N. meningitidis", "E. coli", "S. pneumoniae"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which organism causes meningitis in neonates and is transmitted from mother during delivery?",
                options: ["Listeria monocytogenes", "Streptococcus agalactiae", "E. coli", "Klebsiella pneumoniae"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A patient develops meningitis following head trauma with CSF leak. Commonest organism?",
                options: ["S. pneumoniae", "N. meningitidis", "P. aeruginosa", "E. coli"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Most common cause of bacterial meningitis in adults:",
                options: ["S. pneumoniae", "H. influenzae", "N. meningitidis", "Listeria monocytogenes"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Post-neurosurgical meningitis most commonly caused by:",
                options: ["Pseudomonas aeruginosa", "N. meningitidis", "E. coli", "S. pneumoniae"],
                answer: 0,
                explanation: ""
              },
              {
                q: "CSF findings in bacterial meningitis typically show:",
                options: ["Lymphocytes, low protein, high glucose", "Neutrophils, low glucose, high protein", "Lymphocytes, normal glucose, normal protein", "Neutrophils, normal glucose, low protein"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 32-year-old male with fever and seizures has MRI showing temporal lobe hyperintensity. Likely diagnosis:",
                options: ["Japanese encephalitis", "HSV encephalitis", "Rabies", "CMV encephalitis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Gold standard test for HSV encephalitis:",
                options: ["MRI", "CSF culture", "CSF PCR for HSV", "EEG"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Most common cause of viral meningitis:",
                options: ["Enteroviruses", "HSV", "CMV", "VZV"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 10-year-old develops fever and altered sensorium after mosquito bites. Diagnosis:",
                options: ["Japanese encephalitis", "Rabies", "West Nile virus", "Dengue"],
                answer: 0,
                explanation: ""
              },
              {
                q: "MRI in Japanese encephalitis shows involvement of:",
                options: ["Frontal lobes", "Thalamus", "Occipital lobe", "Cerebellum"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 5-year-old presents with clear CSF and lymphocytic predominance. Which feature rules out bacterial meningitis?",
                options: ["Fever", "Normal glucose", "Vomiting", "Headache"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A patient develops encephalitis and hydrophobia after a dog bite. Diagnosis:",
                options: ["Rabies", "HSV", "Japanese encephalitis", "CMV"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Negri bodies are seen in infection with:",
                options: ["HSV", "Rabies", "CMV", "Varicella-zoster virus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 45-year-old HIV-positive male develops progressive focal neurological deficits. MRI shows multiple demyelinating lesions. Diagnosis:",
                options: ["HSV encephalitis", "PML (JC virus)", "Toxoplasmosis", "Cryptococcal meningitis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Rabies virus belongs to which family?",
                options: ["Herpesviridae", "Rhabdoviridae", "Picornaviridae", "Flaviviridae"],
                answer: 1,
                explanation: ""
              },
              {
                q: "CSF of an HIV-positive patient shows encapsulated yeast cells with India ink stain. Organism:",
                options: ["Cryptococcus neoformans", "Candida albicans", "Aspergillus", "Mucor"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The capsule of Cryptococcus neoformans is composed of:",
                options: ["Chitin", "Glucuronoxylomannan", "Mannoprotein", "Polysaccharide"],
                answer: 3,
                myAnswer: 1,
                explanation: "QB answer (green): \"Polysaccharide\" — the capsule is indeed polysaccharide. My answer (blue): \"Glucuronoxylomannan\" — that is the major specific component (~90%) of the capsule. Both are defensible depending on whether the question wants the general or the specific term."
              },
              {
                q: "Amphotericin B acts by:",
                options: ["Inhibiting ergosterol synthesis", "Binding ergosterol and creating pores", "Inhibiting β-glucan synthesis", "Inhibiting DNA replication"],
                answer: 0,
                myAnswer: 1,
                explanation: "QB answer (green): \"Inhibiting ergosterol synthesis\". My answer (blue): \"Binding ergosterol and creating pores\" — Amphotericin B binds to ergosterol already present in the fungal membrane and forms pores; it does NOT inhibit ergosterol synthesis (that is the mechanism of the azoles)."
              },
              {
                q: "An immunocompromised patient with sinus infection and black nasal eschar — causative agent?",
                options: ["Aspergillus fumigatus", "Mucor species", "Cryptococcus", "Candida"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which stain is used for visualizing fungal capsules in CSF?",
                options: ["Gram stain", "India ink stain", "Ziehl-Neelsen stain", "Giemsa stain"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Most common predisposing factor for cryptococcal meningitis:",
                options: ["HIV infection", "Diabetes", "Steroid therapy", "Organ transplant"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Drug of choice for maintenance therapy in cryptococcal meningitis:",
                options: ["Amphotericin B", "Flucytosine", "Fluconazole", "Itraconazole"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Aspergillus shows hyphae that are:",
                options: ["Non-septate, 90° branching", "Septate, 45° branching", "Septate, 90° branching", "Non-septate, 45° branching"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Mucorales are differentiated by:",
                options: ["Septate hyphae", "Non-septate hyphae", "Dimorphic growth", "Pseudohyphae"],
                answer: 1,
                explanation: ""
              },
              {
                q: "CSF cryptococcal antigen test detects:",
                options: ["Fungal DNA", "Capsular polysaccharide", "Fungal protein", "RNA polymerase"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A farmer with seizures shows cyst with scolex on CT brain. Diagnosis:",
                options: ["Neurocysticercosis", "Toxoplasmosis", "Hydatid cyst", "Amoebic abscess"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Causative organism of neurocysticercosis:",
                options: ["Taenia solium", "Echinococcus granulosus", "Toxoplasma gondii", "Naegleria fowleri"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 25-year-old HIV patient with multiple ring-enhancing lesions. Diagnosis:",
                options: ["Toxoplasma encephalitis", "JC virus infection", "HSV encephalitis", "TB meningitis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Free-living amoeba causing primary amoebic meningoencephalitis:",
                options: ["Naegleria fowleri", "Acanthamoeba", "Entamoeba histolytica", "Giardia lamblia"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Acanthamoeba causes:",
                options: ["Rapidly fatal meningoencephalitis", "Chronic granulomatous encephalitis", "Acute pyogenic meningitis", "Brain abscess"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The infective form of Naegleria fowleri is:",
                options: ["Cyst", "Trophozoite", "Sporozoite", "Bradyzoite"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Toxoplasma gondii definitive host:",
                options: ["Cat", "Dog", "Pig", "Human"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Hydatid cyst in the brain is caused by:",
                options: ["Echinococcus granulosus", "Taenia solium", "Toxoplasma gondii", "Schistosoma"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Mode of transmission of Toxoplasma gondii:",
                options: ["Mosquito bite", "Cat feces or undercooked meat", "Aerosol", "Fecal-oral"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Drug of choice for cerebral toxoplasmosis:",
                options: ["Pyrimethamine + sulfadiazine", "Amphotericin B", "Isoniazid", "Acyclovir"],
                answer: 0,
                explanation: ""
              },
              {
                q: "CSF: lymphocytes ↑, protein ↑, glucose ↓, in a patient with chronic fever and neck stiffness. Diagnosis:",
                options: ["TB meningitis", "Bacterial meningitis", "Viral meningitis", "Cryptococcal meningitis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Common site of exudate in TB meningitis:",
                options: ["Convexities", "Base of brain", "Lateral ventricles", "Cerebellum"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Drug not used in TB meningitis:",
                options: ["Isoniazid", "Rifampicin", "Streptomycin", "Ciprofloxacin"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Characteristic of TB meningitis:",
                options: ["Acute onset", "Basal meningeal enhancement", "Petechial rash", "High glucose in CSF"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Route of spread of TB to CNS:",
                options: ["Lymphatic", "Hematogenous", "Direct trauma", "Airborne"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 64-year-old woman with dementia and myoclonus; EEG shows periodic complexes. Diagnosis:",
                options: ["Creutzfeldt-Jakob disease", "HSV encephalitis", "Rabies", "PML"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Infectious agent in Creutzfeldt-Jakob disease:",
                options: ["Virus", "Prion", "Bacterium", "Fungus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "An AIDS patient with demyelinating brain lesions due to JC virus. Diagnosis:",
                options: ["Progressive multifocal leukoencephalopathy", "Cryptococcal meningitis", "HSV encephalitis", "Toxoplasmosis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Brain abscess following chronic otitis media — most common organism:",
                options: ["Streptococcus milleri", "N. meningitidis", "E. coli", "Listeria monocytogenes"],
                answer: 0,
                explanation: ""
              },
              {
                q: "TB meningitis treatment (initial phase):",
                options: ["HRZES for 2 months", "HRE for 6 months", "HR for 9 months", "HRZ for 3 months"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A one-and-a-half-year-old non-vaccinated child presented with signs of meningitis; her CSF showed pleomorphic gram-negative bacilli. On blood agar, the organisms showed enhanced growth in the presence of X and V factors. What is the likely organism associated with this case?",
                options: ["M. tuberculosis", "E. coli", "S. pneumoniae", "H. influenzae"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A regular swimmer was admitted with diminished vision and neck stiffness. On examination, she was found to have keratitis and meningitis. She gave a history of using semisoft contact lenses. Her CSF culture on axenic media showed microbial growth. Which organism is commonly associated with such a condition?",
                options: ["S. pneumoniae", "M. tuberculosis", "Acanthamoeba spp.", "T. gondii"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 23-year-old wrestler with a habit of consuming raw milk was admitted with signs of meningitis for the past three days. His CSF reveals gram-positive bacilli. Which organism is likely to be associated in this case?",
                options: ["M. tuberculosis", "E. coli", "L. monocytogenes", "B. cereus"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 56-year-old HIV seropositive patient presented with gradually increasing photophobia and impaired consciousness with oculo-facial palsy. CSF show acid-fast bacilli with trehalose 6, 6'-dimycolate. Name the organism associated with this disease.",
                options: ["M. avium-intracellulare", "M. tuberculosis", "M. kansasii", "M. scrofulaceum"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A child with trigeminal neuralgia and vesicular painful ulcer around the mouth was admitted to the hospital. Her CSF sample inoculated on cell culture showed syncytia formation and ballooning. What is the likely organism associated with this condition?",
                options: ["Adenovirus", "Herpes virus", "Cytomegalovirus", "Measles virus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 20-year-old presented with projectile vomiting, headache and fever. He was hospitalised and diagnosed with meningitis. The gram-stain of CSF showed intracellular gram-negative diplococci. Which organism is responsible for this condition?",
                options: ["N. meningitidis", "E. coli", "S. pneumoniae", "Klebsiella spp."],
                answer: 0,
                explanation: ""
              },
              {
                q: "Meningococci are:",
                options: ["Non-capsulated", "Gram-positive diplococci", "Oxidase-negative", "Gram-negative diplococci"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which serogroup of meningococci causes both epidemics and outbreaks?",
                options: ["A", "B", "W-135", "Y"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is NOT a virulence determinant in N. meningitidis?",
                options: ["Capsule", "IgA protease", "Exotoxin", "Endotoxin"],
                answer: 2,
                explanation: ""
              },
              {
                q: "One of the important risk factors in meningococcal disease is complement deficiency. Which complement deficiency favours the disease?",
                options: ["C1 deficiency", "C1 inhibitor deficiency", "C9 deficiency", "C5-C8 deficiency"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Primary agents of pyogenic meningitis include all the following EXCEPT:",
                options: ["Streptococcus pneumoniae", "H. influenzae", "N. meningitidis", "Moraxella catarrhalis"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The selective medium used for meningococci is:",
                options: ["Thayer-Martin medium", "Neomycin blood agar", "Mannitol salt agar", "MYPA agar"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The specimen that is NOT indicated for diagnosis of severe meningococcemia is:",
                options: ["Blood", "Sputum", "Skin lesions", "CSF"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Treatment of meningococcal carriers is by:",
                options: ["Penicillin", "Erythromycin", "Ciprofloxacin", "Tetracycline"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A seven-year-old boy presented to the emergency department with high-grade fever and headache for two days and a single episode of convulsion and projectile vomiting the previous day. On examination, he was found to be disoriented, and his neck rigid; Kernig's sign was positive. On Gram stain, gram-negative cocci were seen in pairs, most of them intracellular with plenty of polymorphs. Which organism is suggested by this Gram stain?",
                options: ["Neisseria meningitidis", "Streptococcus pneumoniae", "H. influenzae", "Streptococcus pyogenes"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which selective medium is used to isolate meningococci from carriers during epidemics?",
                options: ["Chocolate agar", "Cetrimide agar", "Modified Thayer-Martin medium", "Mueller Hinton agar"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Modified Thayer-Martin medium contains:",
                options: ["Vancomycin, colistin and nystatin", "Vancomycin, imipenem and nystatin", "Erythromycin, colistin and nystatin", "Erythromycin, colistin and nalidixic acid"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is used in the identification of Streptococcus agalactiae?",
                options: ["Bile solubility", "PYR test", "CAMP test", "Inulin fermentation"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The blood sample from a neonate suffering from fever grew beta-hemolytic colonies on blood agar. On Gram stain, gram-positive cocci in chains were seen under the microscope. Which is the likely causative agent?",
                options: ["S. pyogenes", "S. pneumoniae", "S. agalactiae", "S. viridans"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which is TRUE about Listeria monocytogenes?",
                options: ["Is non-motile at 25°C", "Major virulence factor is capsule", "Serovars associated with human infections are 1/2a, 1/2b and 4b", "Infection is transmitted by respiratory droplets"],
                answer: 0,
                myAnswer: 2,
                explanation: "QB answer (green): \"Is non-motile at 25°C\". My answer (blue): \"Serovars associated with human infections are 1/2a, 1/2b and 4b\" — Listeria is actually MOTILE at 22–25°C (tumbling motility) and non-motile at 37°C, so the QB option reads as false; the serovar statement is the true one."
              },
              {
                q: "Tumbling motility is shown by:",
                options: ["S. pneumoniae", "Legionella pneumophilia", "Listeria monocytogenes", "Neisseria meningitidis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which organism shows drumstick appearance on Gram stain?",
                options: ["C. perfringens", "C. botulinum", "C. septicum", "C. tetani"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which toxin(s) is responsible for pathogenicity of tetanus?",
                options: ["Tetanolysin", "Tetanospasmin", "Peripherally acting neurotoxin", "All of the above"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Tetanospasmin acts by:",
                options: ["Inhibition of neurotransmitters such as GABA", "Blocking the production or release of acetylcholine", "Degeneration of Nissl bodies", "Combination of all of the above"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The method used for isolating C. tetani from mixed cultures is:",
                options: ["Filde's technique", "Castaneda's method", "Deep agar shake", "Dienes method"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 28-year-old male was brought to the hospital with an altered mental status. He soon progressed to coma and respiratory paralysis. His family members stated that he had consumed preserved meat the previous day. Smear from the suspected meat showed gram-positive sporing bacilli. What is the agent likely associated with these symptoms?",
                options: ["Enterotoxigenic E. coli", "Clostridium botulinum", "Campylobacter jejuni", "Yersinia enterocolitica"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All the following bacteria produce neurotoxins EXCEPT:",
                options: ["Clostridium perfringens", "Clostridium botulinum", "Bacillus cereus", "Vibrio cholerae"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The FALSE statement about botulism is:",
                options: ["Wound botulism resembles food-borne botulism", "In infant botulism, spores are ingested and not the pre-formed toxin", "Type E strains are associated with fish and other seafood", "All the eight toxins produced by C. botulinum are neurotoxins"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following statements correctly describes tetanospasmin?",
                options: ["It is a heat-labile and oxygen-labile toxin", "It is responsible for causing haemolysis on blood agar", "It is a plasmid-encoded toxin responsible for tetanus", "It is similar to the toxins produced by C. perfringens, C. novyi and S. pyogenes"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 25-year-old man is brought to the emergency department after a road traffic accident in a state of altered sensorium. He has a contaminated lacerated wound on his legs. His vaccination status cannot be ascertained. What is the action to be undertaken immediately to provide him with tetanus prophylaxis?",
                options: ["Intramuscular injection of tetanus toxoid", "Intramuscular injection of tetanus toxoid with antibiotics", "Intramuscular injection of tetanus toxoid with antitetanus immunoglobulin and antibiotic", "Subcutaneous injection of tetanus toxoid with antibiotics"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following statements is NOT CORRECT regarding the toxin produced by C. botulinum?",
                options: ["The toxin is not released during the life of the organism", "It acts by inhibition of neurotransmitters such as GABA", "It is produced intracellularly as a non-toxic protoxin or progenitor toxin", "Toxin production is regulated by the presence of bacteriophages"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Aseptic meningitis is commonly caused by:",
                options: ["Enterovirus", "Adenovirus", "Poliovirus", "Echovirus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following are members of Enterovirus EXCEPT:",
                options: ["Echovirus", "Coxsackievirus", "Poliovirus", "Orf virus"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which one of the following is FALSE regarding the oral polio vaccine?",
                options: ["Induces only systemic antibody response", "Protects the individual and the community", "Induces long-lasting immunity", "Early administration can prevent an epidemic"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Degeneration of Nissl bodies is the characteristic feature of:",
                options: ["Poliovirus", "Rabies virus", "Adenovirus", "Vaccinia virus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The pulse polio programme induces:",
                options: ["Active immunity", "Passive immunity", "Herd immunity", "Active and herd immunity"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Failure of the oral polio vaccine occurs because of all of the following EXCEPT:",
                options: ["Interference with other enteroviruses", "Frequent diarrhea preventing colonisation", "Intestinal enzymes", "Immediate breastfeeding after vaccination"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Sabin polio vaccine stimulates the production of all of the following immunoglobulins EXCEPT:",
                options: ["IgM", "IgG", "IgA", "IgD"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following is CORRECT regarding poliovirus?",
                options: ["Poliovirus type 3 is responsible for most epidemics of paralytic poliomyelitis", "In India, poliovirus type 1 commonly causes paralysis", "Immunity is not type-specific", "The virus is destroyed by 0.1 ppm chlorine but higher concentrations are required to kill the virus in sewage water"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which statement is NOT true regarding the epidemiology of poliomyelitis?",
                options: ["Paralysis is seen in more than 90% of infections", "Natural infection occurs only in humans as there are no animal reservoirs", "The virus after entry colonises the nasopharynx and multiplies there", "Primary viremia occurs when the virus enters the bloodstream from the regional lymph nodes of the intestine"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 5-year-old boy presents with neck stiffness and fever for past 2 days. His CSF is sent to the laboratory, with the results revealing lymphocytic pleocytosis, normal glucose and slightly elevated protein. No organisms are seen on Gram stain. The most likely diagnosis in this patient is:",
                options: ["Pyogenic bacterial meningitis", "Viral meningitis", "Tubercular meningitis", "Cannot be ascertained"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Coxsackieviruses have the characteristic ability to infect:",
                options: ["Suckling mice", "Adult mice", "Gnotobiotic mice", "Guinea pigs"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Coxsackie B viruses are associated with all of the following EXCEPT:",
                options: ["Myocarditis", "Encephalitis", "Bornholm disease", "Hand, foot and mouth disease"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Group A coxsackie virus is associated with all of the following EXCEPT:",
                options: ["Bornholm disease", "Hand, foot and mouth disease", "Aseptic meningitis", "Herpangina"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Orchitis is a complication of which one of the following viral infections?",
                options: ["Varicella", "Herpes", "Coxsackie", "Polio"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Herpangina (vesicular pharyngitis) is caused by:",
                options: ["Coxsackie group A", "Coxsackie group B", "ECHO virus", "Poliovirus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following virus is associated with hand, foot and mouth disease?",
                options: ["Enterovirus 71", "Coxsackievirus type 5,10", "Coxsackie type 23", "All of the above"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 25-year-old man reports to casualty with complaints of being bitten by a stray dog on the left leg. The dog cannot be traced. On examination, the leg shows lacerations with multiple bites. The nurse washes the wound with soap and water. What is the immediate action required in casualty?",
                options: ["Take a swab from the wound and send for culture", "Administer rabies vaccine after proper wound toilet", "Administer rabies immunoglobulin and vaccine immediately after proper wound toilet", "Send the patient home"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The staining technique used for the demonstration of Negri bodies is:",
                options: ["Giemsa stain", "Wright's stain", "Field's stain", "Seller's stain"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which part of the brain tissue has Negri bodies in abundance?",
                options: ["Cerebrum", "Brainstem", "Hippocampus", "Corpus callosum"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which vaccines are safe and effective for pre-exposure prophylaxis of rabies?",
                options: ["Semple vaccine", "Beta-propiolactone (BPL)", "Duck egg vaccine", "Human diploid cell vaccine (HDC)"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Post-exposure prophylaxis in rabies is recommended in all of the following cases EXCEPT:",
                options: ["Minor abrasions without bleeding", "Licks on the intact skin", "Single, transdermal bite", "Exposure to bats"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which one of the following is FALSE regarding post-exposure prophylaxis of rabies?",
                options: ["Five-six doses of the vaccine at 3, 7, 14, 30 and 90 days after exposure", "The suspected animal needs observation for two days", "Stop treatment if the animal dies during the observation period", "Stop treatment if the animal tests rabies-positive in a laboratory"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All the following statements are TRUE regarding passive immunisation for rabies EXCEPT:",
                options: ["It should be given after one to two days of the first dose of the vaccine", "Dose of human rabies immune globulin is 20 IU/kg body weight", "There is risk of anaphylaxis with equine rabies immune globulin", "Both active and passive immunisation are preferred in high-risk cases"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which one of the following is FALSE regarding rabid dogs?",
                options: ["Bite without provocation and indiscriminately", "Usually die after 2 weeks", "Lie huddled, unable to feed", "60% of them shed virus in saliva"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which one of the following is FALSE regarding Negri bodies?",
                options: ["Smears are fixed and stained by Seller's technique", "Have round to oval intranuclear bodies", "Possess basophilic inner granules", "Measure 3-27 microns"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All of the following are TRUE with regards to the treatment of an animal bite wound EXCEPT:",
                options: ["Wash the wound thoroughly with soap and water", "Treat with Cetavlon/tincture iodine", "Infiltrate with anti-rabies serum", "Suture the wound immediately"],
                answer: 3,
                explanation: ""
              },
              {
                q: "All of the following are examples of slow viral diseases EXCEPT:",
                options: ["Eastern equine encephalitis", "Subacute sclerosing panencephalitis (SSPE)", "Progressive multifocal leukoencephalopathy (PML)", "Subacute spongiform viral encephalopathies"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is NOT true regarding slow virus disease?",
                options: ["Course of illness lasts for months or years, with remissions and exacerbations", "There is predilection for the involvement of the central nervous system", "The immune response is exaggerated", "There is a genetic predisposition and the disease usually has a fatal outcome"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Prions are:",
                options: ["Protein-containing particles containing either DNA and RNA", "Viruses that are easily destroyed by physical and chemical agents such as heat, irradiation and formalin", "Particles that can be transmitted to experimental animals by parenteral and oral challenge", "All of the above"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The only specific method of diagnosing human prion diseases is:",
                options: ["Measuring an abnormal prion protein (PrPsc)", "CSF examination", "CT scan", "None of the above"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Progressive multifocal leukoencephalopathy (PML) is caused by:",
                options: ["Sindbis virus", "Lassa virus", "Polyomavirus", "West Nile virus"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which one of the following is FALSE with regard to prions?",
                options: ["They are proteinaceous infectious particles", "They cause chronic progressive degenerative diseases of the CNS", "They possess either DNA or RNA", "Resistant to heat, irradiation and formalin"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The reservoir host for Japanese encephalitis is:",
                options: ["Monkey", "Bird", "Rodent", "Sheep"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The transmitting vector of Japanese encephalitis is:",
                options: ["Tick", "Mosquito", "Sandfly", "Rodent"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All of the following viruses belong to the genus Alphavirus EXCEPT:",
                options: ["O'nyong'nyong", "Chikungunya virus", "Hantavirus", "Semliki forest virus"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Japanese encephalitis is transmitted by:",
                options: ["Culex tarsalis", "Culex annulirostris", "Culex tritaeniorhynchus", "Aedes aegypti"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which statement is NOT TRUE regarding neurocysticercosis?",
                options: ["Stool microscopy has no diagnostic role", "Medical treatment is effective only for parenchymal cysts", "60-80% of cases of cysticercosis show marginal involvement", "Meningitis is the most common presenting symptom"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Primary amoebic encephalitis is caused by:",
                options: ["Entamoeba histolytica", "Entamoeba coli", "N. fowleri", "Acanthamoeba castellanii"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is an example of Trojan horses in microbiology?",
                options: ["Acanthamoeba species", "Entamoeba histolytica", "Leishmania donovani", "Trypanosoma cruzi"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Acanthamoeba species can cause:",
                options: ["Parasitic meningitis", "Primary amoebic encephalitis", "Amoebic keratitis", "All of the above"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following is true regarding the treatment of CNS infections caused by free-living amoeba?",
                options: ["It can be treated successfully with metronidazole", "Surgical treatment is often successful", "The condition is almost fatal", "All of the above"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is NOT a morphological form seen in toxoplasmosis?",
                options: ["Tachyzoites", "Bradyzoites", "Sporocyst", "Oocyst"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following statements is true regarding toxoplasmosis?",
                options: ["The definitive host is cat while the intermediate host is man", "The definitive host is rodent while cats are the accidental host", "The definitive host is cat and man is the accidental host", "The intermediate host is cat while man is the definitive host"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Avidity testing of IgG against toxoplasmosis is a good indicator to:",
                options: ["Differentiate recent from past infections", "Diagnose past infections", "Diagnose recent infection", "Detect only congenital infections"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The Sabin-Feldman test has been used to diagnose:",
                options: ["Toxoplasmosis", "Leishmaniasis", "Trypanosomiasis", "Neurocysticercosis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "HIV patients should be started on trimethoprim sulphamethoxazole prophylaxis to prevent toxoplasmosis in:",
                options: ["All patients", "Case of CD4 below 100/μL", "Case of CD4 below 500/μL", "Cases with high IgG"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is a diagnostic criterion of toxoplasmosis in a newborn?",
                options: ["Detection of IgA at 10 days after birth", "Detection of IgE and IgM in newborn blood", "Level of IgG >1,000 mg/dL in neonates", "All of the above"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Winterbottom's sign is seen in:",
                options: ["Toxoplasmosis", "Sleeping sickness", "Cryptococcosis", "Histoplasmosis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The vector responsible for transmission of African sleeping sickness is:",
                options: ["Tsetse fly", "Culex mosquito", "Aedes mosquito", "Rat flea"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 28-year-old smoker developed a severe pneumonia-like syndrome and was hospitalised. In the next two days, he developed meningitis. He was seropositive for HIV and was on antiretroviral therapy. His CD4 counts were less than 50 per mm3. His CSF sample was positive for capsular polysaccharide antigen by serology. What is the likely causative agent?",
                options: ["MTB", "Cryptococcus", "Pneumococci", "Candida spp."],
                answer: 1,
                explanation: ""
              },
              {
                q: "Fatal fungal meningitis in patients with AIDS is commonly caused by:",
                options: ["Cryptococcosis", "Blastomycosis", "Sporotrichosis", "Chromoblastomycosis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Encephalitozoon species have been identified as agents causing:",
                options: ["Renal failure and pneumonitis in HIV-infected persons", "Neurological disease only in immunocompetent persons", "Hemorrhagic fever in HIV-positive patients", "No infections in humans"],
                answer: 0,
                explanation: ""
              }
            ]
          },
          "respiratory-infections": {
            name: "Respiratory Tract Infections",
            emoji: "🫁",
            questions: [
              {
                q: "A 45-year-old known HIV seropositive patient was admitted in the ICU as a case of pneumonia. His CD4 count was 80 cells/mm. GMS stain smear from his broncho-alveolar lavage (BAL) fluid showed cysts measuring 4–6 microns. What is the organism likely associated with this disease?",
                options: ["T. gondii", "P. jirovecii", "H. nana", "C. sinensis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 53-year-old farmer, a known asthmatic, was admitted for evaluation of chronic productive cough. On admission, he had high-grade fever and his chest X-ray showed lobular infiltrates. On Gram staining, his sputum showed numerous eosinophils and fungal filaments with septate hyphae showing 45° angle branching. Name the organism associated with this infection:",
                options: ["Aspergillus fumigatus", "Candida albicans", "Mucor", "Cryptococcus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "An infant was admitted with cough and fever with moderate respiratory distress. Chest examination showed generalised wheeze and the infant was diagnosed as a case of bronchiolitis. Bacterial culture from the respiratory fluid did not yield any growth. What is the likely causative agent in this condition?",
                options: ["Varicella zoster virus", "Respiratory syncytial virus", "Mumps virus", "Candida albicans"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 35-year-old chronic smoker with chronic cough consulted a physician after he noticed red-coloured sputum that morning. His sputum was negative for acid-fast bacilli. However, sputum culture also yielded red-coloured colonies on nutrient agar. What is the organism likely associated with this condition?",
                options: ["S. marcescens", "P. aeruginosa", "K. pneumoniae", "S. pneumoniae"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 52-year-old HIV seropositive patient was suspected of having pulmonary tuberculosis and was admitted for evaluation. His sputum sample was submitted for investigation. Which of the following DOES NOT apply to M. tuberculosis culture?",
                options: ["Colonies on LJ medium are produced after four days", "Colonies are typically rough, tough and buff on LJ medium", "BACTEC culture gives rapid results", "Concentration technique yields better results"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 56-year-old chronic smoker presented with fever and chronic cough with rusty sputum over the past month. His chest X-ray showed dense infiltration in the lower lobe. His sputum growth on blood agar showed alpha-hemolytic colonies. What is the likely pathogen in this case?",
                options: ["K. pneumoniae", "S. aureus", "S. pneumoniae", "M. avium-intracellulare complex"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A two-year-old girl presented with high fever, severe throat pain and difficulty in swallowing over the past two days. Her tonsils were enlarged and covered with a white patch. Albert staining of a specimen from the patch showed bacteria morphologically resembling Corynebacterium diphtheriae. What is the recommended treatment in this case?",
                options: ["Antibiotics and supportive therapy", "Diphtheria antitoxin", "DPT vaccine booster dose", "Antibiotics, diphtheria antitoxin and DPT vaccine"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 50-year-old diabetic man developed fever, cough and respiratory distress and flu-like syndrome. He was diagnosed with pneumonia and admitted. On the third day, his condition deteriorated and he was put on ventilator. A suitable clinical sample was collected in viral transport medium and screened for H1N1 influenza. Which of the following is TRUE with regards to better case management?",
                options: ["Viral culture is recommended", "ELISA is a good test for screening", "Immunochromatography test yields rapid results", "Real-time PCR is the best diagnostic test"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 50-year-old smoker was admitted with pneumonia. His sputum was subjected to a serological test and was positive for Mycoplasma pneumoniae. What is the best method to confirm the diagnosis?",
                options: ["Bacterial culture", "Gram stain microscopy", "Complement fixation test with paired sera", "ELISA for cell wall antigens"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 32-year-old woman presented with fever and chronic cough with hemoptysis for more than six months. She was treated for these symptoms by a local practitioner but her sputum was negative for acid-fast bacilli but showed parasitic ova. What is the pathogen likely associated with this condition?",
                options: ["L. loa", "W. bancrofti", "H. nana", "P. westermani"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The streptococcal enzyme responsible for the serous character of exudates is:",
                options: ["Streptokinase", "Streptodornase", "Hyaluronidase", "Lipoproteinase"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The source of streptokinase used for thrombolytic therapy is:",
                options: ["Streptococcus agalactiae", "Streptococcus equisimilis", "Streptococcus pyogenes", "Streptococcus mutans"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The transport medium used for throat swabs in cases of Streptococcal pharyngitis is:",
                options: ["Pike's medium", "Stuart's medium", "Buffered glycerol saline", "Cary-Blair medium"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Lancefield grouping of streptococci is based on:",
                options: ["Protein antigen", "Carbohydrate antigen", "Capsular antigen", "Teichoic acid antigen"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Streptococcus pyogenes can be differentiated from other hemolytic streptococci by:",
                options: ["Optochin sensitivity", "Bacitracin sensitivity", "Novobiocin sensitivity", "Erythromycin sensitivity"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Individuals suffering from Mycoplasma pneumoniae infection have agglutinins to:",
                options: ["Streptococcus mutans", "Streptococcus MG", "Streptococcus equisimilis", "Streptococcus agalactiae"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 12-year-old boy developed acute glomerulonephritis a week after he had pyoderma. The etiological agent can be identified by serotyping of:",
                options: ["Capsule", "M proteins", "Pili", "Carbohydrate"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All the following are TRUE about M protein of S. pyogenes EXCEPT:",
                options: ["Responsible for virulence", "Is heat- and acid-stable", "Is used for typing streptococci", "M protein is not antigenic"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All the following are TRUE about nutritionally variant streptococci EXCEPT:",
                options: ["Need pyridoxal for their growth", "Are part of the normal flora", "Cause infective endocarditis", "Do not grow on blood agar"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Alpha-hemolysis on blood agar is produced by:",
                options: ["Streptococcus pyogenes", "Staphylococcus aureus", "Streptococcus pneumoniae", "Streptococcus agalactiae"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Scarlet fever is due to:",
                options: ["Production of endotoxin by S. pyogenes", "Production of exotoxin A and C by S. pyogenes", "Lipoteichoic acid of S. pyogenes", "Capsule of S. pyogenes"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Beaded appearance of Corynebacterium diphtheriae on staining indicates:",
                options: ["Live bacilli", "Dead bacilli", "Storage of energy", "Presence of exotoxin"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The lethal dose of diphtheria toxin is:",
                options: ["0.001 µg/kg", "0.01 µg/kg", "0.1 µg/kg", "0.2 µg/kg"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The toxigenicity of Corynebacterium diphtheriae is due to:",
                options: ["Beta phage", "Lambda phage", "Gamma phage", "Delta phage"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The receptor for diphtheria toxin is:",
                options: ["CD3", "CD8", "CD9", "CD16"],
                answer: 2,
                explanation: ""
              },
              {
                q: "In its action, diphtheria toxin resembles the toxin of:",
                options: ["Staphylococcus aureus", "Bacillus cereus", "Clostridium perfringens", "Pseudomonas aeruginosa"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Diphtheria toxin attacks all the following tissues EXCEPT:",
                options: ["Myocardium", "Skin", "Adrenals", "Liver"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The organ that is maximally damaged by the diphtheria toxin is:",
                options: ["Heart", "Kidney", "Liver", "Brain"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The best method for typing Corynebacterium is:",
                options: ["Phage typing", "Bacteriocin typing", "Biotyping", "Ribotyping"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Post-diphtheritic paralysis is seen usually at:",
                options: ["2-3 weeks", "3-4 weeks", "4-5 weeks", "5-6 weeks"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The stain NOT used for Corynebacterium is:",
                options: ["Albert", "Kinyoun", "Ponder", "Neisser"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Isolation of Corynebacterium requires enrichment with all the following EXCEPT:",
                options: ["Egg", "Starch", "Blood", "Serum"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A lipophilic Corynebacterium species is:",
                options: ["C. jeikeium", "C. ulcerans", "C. pseudotuberculosis", "C. minutissimum"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 7-year-old unvaccinated child presents with complaints of pain in the throat and fever for the past two days. On examination, the child has a dirty white membrane in the throat. A throat swab is collected and sent for processing. Which medium provides rapid growth for early identification?",
                options: ["Tellurite blood agar", "Loeffler's serum slope", "Tinsdale medium", "Lowenstein-Jensen medium"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Corynebacterium diphtheriae and C. ulcerans have a similar colony morphology on tellurite blood agar. Which biochemical test differentiates the two?",
                options: ["Catalase test", "Oxidase test", "Urease test", "Nitrate test"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The protective titre of antitoxin following vaccination is:",
                options: ["0.01 IU/mL", "0.05 IU/mL", "0.1 IU/mL", "0.5 IU/mL"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A multidrug-resistant Corynebacterium species was isolated from a case of prosthetic valve endocarditis. The species will be:",
                options: ["C. ulcerans", "C. xerosis", "C. parvum", "C. jeikeium"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The drug of choice for treating diphtheria carriers is:",
                options: ["Penicillin", "Ampicillin", "Erythromycin", "Doxycycline"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A Corynebacterium species that causes healthcare-associated infections is:",
                options: ["C. striatum", "C. parvum", "C. pseudotuberculosis", "C. pseudodiphthericum"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The sputum culture of an 80-year-old male patient with respiratory infection yielded a large number of gram-negative diplococci. His sputum also showed plenty of pus cells. The pathogen is likely to be:",
                options: ["N. meningitidis", "N. bovis", "Moraxella catarrhalis", "Moraxella lactamica"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 'hockey puck' sign is typically seen with:",
                options: ["N. gonorrhoeae", "N. meningitidis", "M. catarrhalis", "N. sicca"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which non-sporing anaerobic gram-negative bacilli are responsible for Vincent's angina?",
                options: ["Bifidobacterium", "Fusobacterium", "Leptotrichia", "Prevotella"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Human adenoviruses are grown in:",
                options: ["HeLa cell lines", "Monkey kidney cell lines", "Rhesus cell lines", "Baby hamster kidney cell lines"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which one of the following adenovirus serotypes is involved in the causation of tumours in humans?",
                options: ["Serotypes 12 and 18", "Serotypes 12, 18, 31", "All serotypes", "No role in human cancers"],
                answer: 3,
                explanation: ""
              },
              {
                q: "All of the following clinical features are characteristic of adenoviral infection EXCEPT:",
                options: ["Diarrhea", "Hemorrhagic fever", "Hemorrhagic cystitis", "Keratoconjunctivitis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which one of the following is FALSE regarding the shell vial technique?",
                options: ["Virus is grown on monolayer cell lines", "Cannot be performed directly on clinical samples", "Centrifugation decreases the time to culture positivity", "Direct immunofluorescence method is used for reporting"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which one of the following is FALSE regarding adeno-associated viruses?",
                options: ["They are defective viruses", "They are oncogenic", "They can grow only in cells already infected by adenoviruses", "Belong to the Parvoviridae family"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Genetic reassortment is a common natural event of:",
                options: ["Influenza A virus", "Influenza B virus", "Influenza C virus", "Influenza D virus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The name Myxovirus refers to:",
                options: ["Ability of the virus to undergo point mutations", "Affinity of the virus towards mucin", "Ability of the virus to integrate", "Mixed antigenic structure of the virus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The family Paramyxoviridae includes all of the following viruses EXCEPT:",
                options: ["Mumps virus", "Rhinovirus", "Newcastle disease virus", "Respiratory syncytial virus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Gradual sequential change in the viral antigenic structure at regular intervals is known as:",
                options: ["Antigenic shift", "Antigenic drift", "Point mutation", "Antigenic recombination"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The von Magnus phenomenon in influenza viruses refers to:",
                options: ["Point mutations", "Recombination between RNA genomes", "Formation of incomplete virus particles", "Genetic reassortment of human and swine viruses"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The incubation period in human influenza is:",
                options: ["1-3 days", "8-10 days", "10-12 days", "12-14 days"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following viral infections is associated with Reye's syndrome?",
                options: ["Influenza type A", "Influenza type B", "Influenza type C", "Adenovirus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following neuraminidase inhibitor drugs is effective against influenza?",
                options: ["Acyclovir", "Adefovir", "Oseltamivir", "Gancyclovir"],
                answer: 2,
                explanation: ""
              },
              {
                q: "An eight-year-old schoolgoing girl developed fever, malaise and non-suppurative right parotid gland swelling. During the next two days, the left parotid gland was enlarged and the whole episode got resolved within a week. What is the likely causative agent?",
                options: ["Measles virus", "Mumps virus", "Newcastle disease virus", "Respiratory syncytial virus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following occurs as a complication of mumps?",
                options: ["Giant cell pneumonia", "Acute hepatitis", "Epididymo-orchitis", "Subacute sclerosing panencephalitis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Jeryl-Lynn strain is used for vaccination against:",
                options: ["Influenza", "Measles", "Rubella", "Mumps"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following was originally isolated from children with acute laryngotracheobronchitis?",
                options: ["Influenza virus", "Parainfluenza virus", "Respiratory syncytial virus", "Human metapneumo virus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All of the following are TRUE regarding Koplik's spots EXCEPT:",
                options: ["They appear one to two days after the rash appears", "They are bluish white ulcerations on the buccal mucosa", "They indicate local viral replication", "They contain cytoplasmic and intranuclear inclusion bodies"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Presence of Warthin-Finkeldey cells in lymphoid tissue is characteristic of:",
                options: ["Measles", "Mumps", "Rubella", "Newcastle disease"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All of the following are complications of measles EXCEPT:",
                options: ["Giant cell pneumonia", "Meningoencephalitis", "Epididymo-orchitis", "Subacute sclerosing panencephalitis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All of the following are TRUE regarding measles EXCEPT:",
                options: ["Koplik's spots develop one-two days before the appearance of a rash", "Maculopapular rash first appears on the forehead", "Mountoux and other allergic skin tests may be positive", "Can result in spontaneous abortion or premature delivery"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which strain of virus is preferred for active immunisation in measles?",
                options: ["Edmonston", "Edmonston-Zagreb", "Jeryl-Lynn", "Schwartz Moratena"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following statement is NOT CORRECT regarding parainfluenza viruses?",
                options: ["The paramyxoviruses are responsible for about 10% of respiratory infections in children needing hospitalisation", "In adults, parainfluenza viruses cause milder respiratory infections in which sore throat and hoarseness of the voice are common", "Otitis media is a common complication in immunocompetent individuals", "Currently, there is no vaccine against this group of viruses"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is a clinical feature of rubella?",
                options: ["Koplik's spots are seen on the buccal mucosa", "Rash develops on the face, spreading to the neck, trunk and extremities", "Subacute sclerosing panencephalitis is a common complication", "Croup, bronchitis is seen in adults"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Owl's eye appearance is associated with:",
                options: ["HSV-2", "Herpes zoster infection", "CMV", "Tanapox"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Shell vial culture is used for which one of the following organisms?",
                options: ["HIV", "Rabies virus", "H1N1", "CMV"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the antivirals can be used to treat CMV?",
                options: ["Foscarnet", "Gancyclovir", "Cidofovir", "All of the above"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A common organism associated with dental caries is:",
                options: ["Streptococcus pyogenes", "Streptococcus pneumoniae", "Streptococcus viridans", "Streptococcus mutans"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Lanceolate appearance is shown by:",
                options: ["Streptococcus pyogenes", "Staphylococcus aureus", "Enterococcus faecalis", "Streptococcus pneumonia"],
                answer: 3,
                explanation: ""
              },
              {
                q: "All of the following are virulence factors produced by Streptococcus pneumoniae EXCEPT:",
                options: ["Pneumolysin", "Capsule", "Autolysin", "Exfoliative toxin"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The capsule of Streptococcus pneumoniae in CSF can be demonstrated by:",
                options: ["India ink", "Latex agglutination test", "Precipitation with antisera", "All of these"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Alpha-hemolysis on blood agar is produced by:",
                options: ["Streptococcus pyogenes", "Staphylococcus aureus", "Streptococcus pneumoniae", "Streptococcus agalactiae"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Draughtsman colony on blood agar is shown by:",
                options: ["Streptococcus pyogenes", "Streptococcus pneumoniae", "Streptococcus viridans", "Streptococcus mutans"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All the following are characteristics of Streptococcus pneumoniae EXCEPT:",
                options: ["Optochin sensitivity", "Bile solubility", "Inulin fermentation", "Oxidase positivity"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Penicillin resistance in pneumococci is due to:",
                options: ["Beta-lactamase production", "Alteration in penicillin-binding proteins", "Acquisition of mecA gene", "All of these"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following pneumococcal vaccines is NOT recommended for children under 2 years of age?",
                options: ["7-valent conjugate vaccine", "23-valent polysaccharide vaccine", "13-valent conjugate vaccine", "All of these"],
                answer: 1,
                explanation: ""
              },
              {
                q: "H. influenzae is also known as:",
                options: ["Hoffman's bacillus", "Whitmore's bacillus", "Pfeiffer's bacillus", "Frisch bacillus"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is the causative agent of pink eye?",
                options: ["H. aegyptius", "H. ducreyi", "H. influenzae", "H. parainfluenzae"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Brazilian purpuric fever is caused by:",
                options: ["H. aegyptius", "H. aphrophilus", "H. paraprophilus", "H. haemolyticus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Pittman classified Haemophilus into six types—a-f. This classification is based on:",
                options: ["Protein antigens", "Carbohydrate antigens", "Capsular antigens", "Flagellar antigens"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The culture medium that is NOT used for isolating Haemophilus influenzae is:",
                options: ["Chocolate agar", "MacConkey's agar with streak of staphylococcus aureus", "Levinthal's medium", "Filde's agar"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Haemophilus which DOES NOT require both X and V factors for its growth is:",
                options: ["H. influenzae", "H. aegyptius", "H. ducreyi", "H. parainfluenzae"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Haemophilus parainfluenzae differs from H. influenzae in that it:",
                options: ["Requires only the V factor for growth", "Does not require both X and V factor", "Requires only X factor and not V factor", "Does not cause respiratory tract infections"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The FALSE statement about H. influenzae is:",
                options: ["Direct antigen detection is possible with CSF in meningitis", "Cefotaxime is the drug of choice for Haemophilus meningitis", "Characteristic iridescence can be demonstrated in Filde's agar", "Capsule is made of polyribosyl phosphate"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Best specimen for the culture of Bordetella is:",
                options: ["Tracheal aspirate", "Sputum", "Nasopharyngeal aspirate", "Endobronchial aspirate"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The toxin responsible for the destruction of ciliated respiratory epithelial cells in whooping cough is:",
                options: ["Pertussis toxin", "Tracheal cytotoxin", "Filamentous hemagglutinin", "Pertactin"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The major component of acellular pertussis vaccine is:",
                options: ["Pertussis toxin", "Tracheal cytotoxin", "Filamentous hemagglutinin", "Pertussis toxin promoter"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Appearance of Bordetella in a smear resembles:",
                options: ["Palisading", "Cuneiform", "Thumbprint", "Boxcar"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Maximum infectivity in whooping cough is seen during the:",
                options: ["Catarrhal stage", "Paroxysmal stage", "Convalescent stage", "Acute stage"],
                answer: 0,
                explanation: ""
              },
              {
                q: "B. pertussis swabs may be transported in all the following EXCEPT:",
                options: ["Casamino acid solution", "Stuart's medium", "Mischulow's charcoal agar", "Lacey's medium"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All are TRUE about Bordetella pertussis except:",
                options: ["Bipolar metachromatic granules can be demonstrated with toluidine-blue staining", "Ability to grow on nutrient agar", "The source of infection is always a patient", "Confluent growth presents an aluminium paint appearance"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The FALSE statement about pertussis vaccine is:",
                options: ["Adverse reactions are less with acellular vaccine", "A serious reaction to pertussis vaccination is hypotonic hyporesponsive episodes", "Rough phase-1 strains are used for vaccine", "Encephalitis may occur as a complication"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A four-month-old unimmunised child was brought with complaints of severe cough ending with a typical whoop for the past 10–12 days. The boy had apnea during the bouts, followed by vomiting, but was said to be sleeping comfortably between bouts. The culture of the nasopharyngeal swab showed typical colonies of B. pertussis on blood agar. The colonies are known as:",
                options: ["Bisected pearls colonies", "Draughtsman colonies", "Pitting colonies", "Punched out colonies"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The common cause of spurious hemoptysis is:",
                options: ["E. coli", "Klebsiella pneumoniae", "Serratia marcescens", "Enterobacter cloacae"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is NOT a non-fermenter:",
                options: ["Pseudomonas", "Acinetobacter spp.", "Burkholderia", "Kingella"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following is TRUE about non-fermenters?",
                options: ["Most non-fermenters utilise carbohydrates by the oxidative pathway", "They are resistant to common antibiotics used in hospitals", "Acinetobacter and Pseudomonas are both non-fermenters", "All of these"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Pseudomonads are motile by:",
                options: ["Polar flagella", "Lophotrichous flagella", "Peritrichous flagella", "Amphitrichous flagella"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Exotoxin A of Pseudomonas aeruginosa has a mechanism of action resembling that of:",
                options: ["Cholera toxin", "Diphtheria toxin", "Staphylococcal exotoxin", "Listeriolysin"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The pigment that is unique to Pseudomonas aeruginosa is:",
                options: ["Pyorubin", "Pyoverdin", "Pyocyanin", "Pyomelanin"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Necrotising enteritis caused by Pseudomonas is called:",
                options: ["Shanghai fever", "Ecthyma gangrenosum", "Erythema marginatum", "Malignant enteritis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Capsule of Pseudomonas is made up of:",
                options: ["Glycoprotein", "Hyaluronic acid", "Glutamate", "Alginate"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The tracheal aspirate of a patient with ventilator-associated pneumonia grew a non-fermenter in culture. The least likely organism will be:",
                options: ["Pseudomonas aeruginosa", "Acinetobacter baumannii", "Burkholderia pseudomallei", "Stenotrophomonas maltophilia"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All the following are virulence factors of P. aeruginosa EXCEPT:",
                options: ["Exotoxin A", "Alginate", "Pili", "Protein A"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The most common agent causing respiratory infection in cystic fibrosis patients is:",
                options: ["Pseudomonas aeruginosa", "Burkholderia cepacia", "Burkholderia mallei", "Stenotrophomonas maltophilia"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The FALSE statement about Mycoplasma pneumoniae is:",
                options: ["Sputum is not an ideal sample for culture", "Treatment is with erythromycin", "Diagnosed by serum cold antibody", "Growth requires anaerobic environment"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Urogenital infections may be caused by all of the following EXCEPT:",
                options: ["C. pecorum", "Ureaplasma urealyticum", "Mycoplasma hominis", "Mycoplasma genitalium"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The cell wall of Mycoplasma is mainly formed of:",
                options: ["Muramic acid", "Diaminopimelic acid", "Sterols", "Lipoteichoic acid"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The morphology of Mycoplasma is:",
                options: ["Cocci", "Star shape", "Rods", "All of these"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Mycoplasmas are resistant to all EXCEPT:",
                options: ["Tetracycline", "Penicillins", "Cephalosporins", "Lysozymes"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following are human pathogens EXCEPT:",
                options: ["Mycoplasma bovis", "M. genitalium", "M. hominis", "M. pneumonia"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following are requirements for Mycoplasma culture medium EXCEPT:",
                options: ["Serum", "Yeast extract", "Penicillin", "Starch"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is NOT TRUE of Mycoplasma?",
                options: ["They form poached-egg colonies", "Colonies stain by Diene's method", "Colonies can be seen by tetrazolium reduction test", "No turbidity in liquid medium"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The extracellular infective form of Chlamydia is:",
                options: ["Elementary body", "Inclusion body", "Reticulate body", "Initial body"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following conditions are associated with Chlamydia trachomatis EXCEPT:",
                options: ["Trachoma", "Psittacosis", "Infant pneumonia", "Inclusion conjunctivitis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All are methods used for staining Chlamydia EXCEPT:",
                options: ["Castaneda", "Macchiavello", "Gimenez", "Gomori"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Chlamydia can be grown in the following sites EXCEPT:",
                options: ["McCoy cells", "HeLa cells", "Chorioallantoic membrane", "Yolk sac"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The TWAR agent is:",
                options: ["C. trachomatis", "C. pneumoniae", "C. psittaci", "C. pecorum"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is true regrading Pontiac fever?",
                options: ["It is a milder, non-fatal, 'influenza-like' illness", "It can cause outbreaks with high attack rates", "It is caused by Legionella pneumophila", "All of the above"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The selective medium used for isolation of Legionella pneumophila is:",
                options: ["Pike's medium", "Buffered charcoal yeast extract agar", "Chocolate agar", "Blood agar with colistin"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Infection transmitted by aerosols from air conditioners, cooling towers, etc., are:",
                options: ["Legionellosis disease", "Listeriosis", "Tularemia", "Donovaniosis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Coronaviruses are divided into four main subgroups based on their genomic structure. Of these, which are associated with human infections?",
                options: ["Alpha and beta", "Beta and gamma", "Alpha and gamma", "Alpha and delta"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which animal is thought to be a reservoir of SARS-CoV-2?",
                options: ["Bats", "Cats", "Pangolin", "Man"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The receptor binding domain of spike protein of SARS-CoV-2 binds to:",
                options: ["ACE2 receptors present in lungs only", "ACE1 receptors present in lungs only", "ACE1 receptors present in lungs, and other organs such as the heart, kidneys and gastrointestinal tract", "ACE2 receptors present in lungs and other organs such as the heart, kidneys and gastrointestinal tract"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Match the following COVID-19 vaccines with their principles correctly: (1) Covaxin (2) Novovax (3) BNT162b2 (4) Covishield — with (i) Genetically engineered mRNA (ii) Recombinant adenovirus with a SARS-COV-2 spike protein gene (iii) Fragments of spike protein subunit with adjuvant (iv) Inactivated or live-attenuated",
                options: ["1-iii, 2-ii, 3-i, 4-iv", "1-iv, 2-iii, 3-i, 4-ii", "1-i, 2-iii, 3-iv, 4-i", "1-iv, 2-ii, 3-ii, 4-iii"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following clinical presentations is not seen in Aspergillus infection?",
                options: ["Otomycosis", "Allergic bronchopulmonary aspergillosis", "Zygomycosis", "Mycotic keratitis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Detection of galactomannan in serum is diagnostic of:",
                options: ["Invasive aspergillosis", "Mucormycosis", "Candida infection", "Cryptococcosis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 56-year-old man with uncontrolled type 2 diabetes presented with complaints of chills, fever, cough and sore throat. Her chest X-ray showed left lower lobe consolidation and a diagnosis of pneumonia was made. Culture of bronchoalveolar lavage in wet mount showed typical hyphae with dichotomous branching at acute angles. This is suggestive of:",
                options: ["Rhizopus", "Mucor", "Aspergillus", "Cryptococcus"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Zygomycosis is caused by:",
                options: ["Aspergillus and Penicillium", "Coccidiodis and Histoplasma", "Mucor and Rhizopus", "Candida and Cryptococcus"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A high case fatality due to vascular invasion in an immunocompromised host is the characteristic feature of:",
                options: ["Candidiasis", "Mucormycosis", "Blastomycosis", "Sporotrichosis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 55-year-old man with uncontrolled diabetes recovered after suffering from COVID-19 and was discharged from the ICU. Three weeks later, he developed fever and nausea, with tenderness and swelling of the eyelids. A diagnosis of rhino-orbito-cerebral mucormycosis was made. Wet preparation of exudate is most likely to show:",
                options: ["Hyphae with dichotomous branching at acute angles", "Broad ribbon-like aseptate hyphae", "Capsulated yeast cells", "Non-capsulated yeast cells"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following fungi is capsulated?",
                options: ["Candida", "Rhodotorula", "Pneumocystis", "Cryptococcus"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which statement is NOT TRUE regarding Cryptococcus neoformans?",
                options: ["Grows at 37°C", "Grows on SDA", "Possesses polysaccharide capsule", "Negative urease test"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following statements is TRUE regarding the morphology of Pneumocystis jirovecii?",
                options: ["Round or ovoid budding cell with a polysaccharide capsule", "Round or ovoid budding cell, without capsule", "Exists in three forms, namely trophozoite, precyst and cyst", "Both hyphal and yeast forms are seen"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which stain can be used to stain trophozoites of Pneumocystis jirovecii?",
                options: ["Lactophenol cotton blue", "Giemsa", "India ink", "Gram"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is a dimorphic fungus?",
                options: ["Histoplasma capsulatum", "Cryptococcus neoformans", "Candida albicans", "Mucor species"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Dimorphic fungi are characterised by:",
                options: ["Hyphal forms at 37°C and yeast form at 25°C", "Hyphal forms at 25°C and yeast form at 37°C", "Both hyphal and yeast forms at 37°C", "Both hyphal and yeast forms at 25°C"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Tuberculate spores are characteristic of:",
                options: ["Cryptococcus neoformans", "Candida albicans", "Mucor species", "Histoplasma capsulatum"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which fungus gives a typical mariner's wheel or pilot's wheel appearance after the tissue is stained with methenamine silver stain?",
                options: ["Histoplasma capsulatum", "Blastomyces dermatitidis", "Paracoccidioides brasiliensis", "Coccidioides immitis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All of the following fungi are dimorphic EXCEPT:",
                options: ["H. capsulatum", "B. dermatitidis", "P. marneffei", "C. albicans"],
                answer: 3,
                explanation: ""
              },
              {
                q: "South American blastomycosis is caused by:",
                options: ["Histoplasma capsulatum", "Blastomyces dermatitidis", "Paracoccidioides brasiliensis", "Coccidioides immitis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 50-year-old man living in Manipur regularly eats crab. He occasionally noticed small brownish specks in his sputum. Microscopic examination of these brown specs revealed brown-coloured oval eggs with operculum. What is the most probable diagnosis?",
                options: ["Paragonimiasis", "Ascariasis", "Echinococcosis", "Schistosomiasis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The definitive host in paragonimiasis is:",
                options: ["Snail", "Crab", "Crayfish", "Man"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The infective form in paragonimiasis to man is:",
                options: ["Miracidium larva", "Cercaria larva", "Metacercaria larva", "Sporocysts"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which statement best describes the parasite P. westermani?",
                options: ["The adult is oval, thick, fleshy and dark red", "Sexes are separate", "It can measure up to 1 meter in length", "It has no suckers"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following drugs is commonly used to treat paragonimiasis?",
                options: ["Praziquantel", "Albendazole", "Metronidazole", "DEC"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Mycobacterium tuberculosis complex includes all of the following EXCEPT:",
                options: ["M. tuberculosis", "M. bovis", "M. africanum", "M. intracellulare"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The virulence factor that helps in the persistence of mycobacteria in phagocytosis is:",
                options: ["Lipid", "Lipoarabinomannan", "Cord factor", "Cytoplasmic antigen"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The biochemical reaction that helps in the identification of M. tuberculosis is:",
                options: ["Niacin test", "Aryl sulfatase test", "Heat stable catalase test", "Oxidase test"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Decontamination of sputum prior to culture for mycobacteria is done using:",
                options: ["Sodium hydroxide", "Sodium chloride", "Sodium citrate", "Sodium bicarbonate"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All of the following methods are used for staining M. tuberculosis EXCEPT:",
                options: ["Ziehl-Neelsen", "Kinyoun's", "Seller's", "Auramine O"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The lowest detection limit of culture is:",
                options: ["10,000", "1,000-10,000", "100-1,000", "10-100 mycobacteria/mL"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Identification of M. tuberculosis is confirmed by:",
                options: ["Growth on Lowenstein Jensen (LJ) medium", "Growth on LJ with paranitrobenzoic acid", "Growth in mycobacteria growth indicator tube (MGIT)", "Growth on LJ medium followed by smear"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Indications for the tuberculin test include all the following EXCEPT:",
                options: ["Diagnosis of active infection in all individuals", "Diagnosis of latent TB infection", "Studying the prevalence of infection", "Studying the effect of vaccination"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following statements is TRUE regarding interferon gamma release assay (IGRA)?",
                options: ["It is the assay used for diagnosing active TB", "It is an in vivo test", "Antigens used are purified protein derivatives", "In children, it is inferior to the tuberculin skin test"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following is TRUE about the BCG vaccine?",
                options: ["It is a live-attenuated vaccine derived from M. tuberculosis", "Protective efficacy of the vaccine is 80-90%", "The size of the skin test reaction after vaccination predicts the degree of protection afforded", "There is decreased efficacy in populations with prior exposure to environmental mycobacteria"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The best sample for diagnosing urinary TB is:",
                options: ["Early morning mid-stream urine", "Early morning whole voided sample", "24-hour urine", "Early morning terminal urine sample"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The molecular test that detects both rifampicin and INH resistance in Mycobacterium tuberculosis is:",
                options: ["MGIT", "BACTEC", "VITEK", "Line probe assay"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Among the anti-tuberculous drugs, the one which is bacteriostatic is:",
                options: ["Rifampicin", "Pyrazinamide", "Ethambutol", "Streptomycin"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The anti-TB drug given for chemoprophylaxis is:",
                options: ["Rifampicin", "Isoniazid", "INH and rifampicin", "INH and ethambutol"],
                answer: 1,
                explanation: ""
              },
              {
                q: "MDR-TB is a Mycobacterium tuberculosis strain resistant to:",
                options: ["INH and rifampicin", "INH and fluoroquinolone", "INH, rifampicin and fluoroquinolone", "INH, rifampicin, fluoroquinolone and aminoglycoside"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 65-year-old man in the US attended a camp in a forest area. Soon he developed cough, fever, cough and fatigue. His blood sample grew fungus and the sputum showed plenty of spherules. Which of the following is likely to be associated in this case?",
                options: ["H. capsulatum", "C. albicans", "C. immitis", "Cryptococci"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The other name for Darling's disease is:",
                options: ["Histoplasmosis", "Sporotrichosis", "Chromoblastomycosis", "Rhinosporidiosis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 35-year-old woman developed pneumonia. She was seropositive for HIV, her chest X-ray showed interstitial lung infiltrates and sputum examination revealed black-coloured cyst walls on methenamine silver stain. What is the most likely causative agent?",
                options: ["P. jirovecii", "C. albicans", "H. capsulatum", "B. dermatitidis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A tourist from North America who is a known diabetic develops pneumonitis. What is the likely causative agent in this case?",
                options: ["C. albicans", "B. dermatitidis", "C. immitis", "P. brasiliensis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which organism is associated with foul-smelling nasal discharge, atrophic changes in the nasal mucosa and resorption of the nasal bone?",
                options: ["Citrobacter freundii", "Pantoea agglomerans", "Enterobacter cloacae", "Klebsiella ozaenae"],
                answer: 3,
                explanation: ""
              }
            ]
          },
          "genitourinary-sti": {
            name: "Genitourinary & Sexually Transmitted Infections",
            emoji: "🚻",
            questions: [
              {
                q: "A 32 yr old male patient, came to hospital with complaints of burning micturition, pain abdomen and difficulty in passing urine, was later admitted to hospital and was catheterized. The urine culture yielded a Gram negative bacilli, which was non-lactose fermenting with green pigment on agar plate. The colonies were oxidase positive. The probable organism could be:",
                options: ["Proteus vulgaris", "Acinetobacter baumannii complex", "Burkholderia cepacia", "Pseudomonas aeruginosa"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 28 yr old female patient presented to OPD with complaints of burning micturition, mild on and off fever and dysuria. The mid stream clean catch urine sample was collected and sent for aerobic culture and sensitivity. The culture yielded Klebsiella pneumoniae with significant growth. Which of the following colony count is considered as significant in urine sample?",
                options: ["100 CFU/mL", "1,000 CFU/mL", "10,000 CFU/mL", "1,00,000 CFU/mL"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 34 year old pregnant woman who is in her 2nd trimester has no urinary symptoms, but routine urine culture shows E.coli with significant growth of 10^5 CFU/mL. What is the best management for this patient?",
                options: ["No treatment needed", "Nitrofurantoin for 7 days", "Ciprofloxacin for 3 days", "Wait and watch for symptoms"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 30 year old patient with fever, burning micturition and dysuria, had sent urine sample for culture and sensitivity, where the colonies were mucoid in nature, lactose fermenting, smear showed Gram negative bacilli which is catalase positive, oxidase negative, indole-negative, citrate – positive and urease – hydrolysed (positive). What is the probable causative agent?",
                options: ["E.coli", "Citrobacter spp", "Klebsiella pneumoniae", "Enterobacter cloacae"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 22-year-old male presents with a single painless ulcer on his penis. He denies any fever or systemic symptoms. He had unprotected sex with a new partner 3 weeks ago. On exam, the ulcer has a clean base and indurated edges. No inguinal lymphadenopathy is noted. What is the most likely diagnosis?",
                options: ["Herpes simplex virus", "Syphilis (Primary)", "Lymphogranuloma venereum", "Chancroid"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 30-year-old woman presents with a foul-smelling, frothy green vaginal discharge and vaginal itching. On examination, the cervix appears strawberry-like. What is the most likely causative organism?",
                options: ["Candida albicans", "Trichomonas vaginalis", "Gardnerella vaginalis", "Neisseria gonorrhoeae"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 20-year-old woman presents with painful genital ulcers, fever, malaise, and dysuria. This is her first episode of such symptoms. On exam, she has multiple small vesicles and ulcers on the vulva with tender bilateral inguinal lymphadenopathy. Which of the following statements is most accurate regarding her condition?",
                options: ["This is likely caused by HPV infection", "She should be started on oral antivirals for 10 days", "This is likely a recurrence of latent HSV-1 infection", "Genital herpes is always caused by HSV-2"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 32-year-old woman presents with recurrent genital ulcers. She says prior tests for syphilis were negative. She's uncertain if it's herpes. On exam, there are shallow ulcers and erythema. What is the best diagnostic test for confirmation of genital herpes?",
                options: ["Tzanck smear", "Serologic IgG test for HSV-2", "HSV PCR of lesion swab", "Bacterial culture"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 34-year-old male presents with a painful genital ulcer. The lesion has soft edges and a yellow-grey purulent base. There is also unilateral, tender inguinal lymphadenopathy. Syphilis and HSV PCR tests are negative. Which of the following is the best next step to confirm the diagnosis?",
                options: ["Dark-field microscopy", "Gram stain and culture for H. ducreyi", "Tzanck smear", "NAAT for Chlamydia trachomatis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 22-year-old man is diagnosed with chancroid based on clinical findings and exclusion of syphilis and HSV. Culture confirms Haemophilus ducreyi. Which of the following is the most appropriate treatment?",
                options: ["Benzathine penicillin G", "Acyclovir", "Azithromycin 1 g orally single dose", "Metronidazole 2 g single dose"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 24-year-old man presents with burning micturition and a profuse, thick, purulent urethral discharge. He had unprotected sex 4 days ago with a new partner. Gram stain of the urethral discharge shows intracellular gram-negative diplococci. What is the most likely organism?",
                options: ["Chlamydia trachomatis", "Treponema pallidum", "Neisseria gonorrhoeae", "Mycoplasma genitalium"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 26-year-old woman presents with several small, soft, cauliflower-like growths on the vulva that have been gradually increasing in size over the past few weeks. They are painless but cause some discomfort during intercourse. She has no systemic symptoms and is otherwise healthy. Pap smear results from 6 months ago were normal. The most likely causative agent is:",
                options: ["HPV 16 and 18", "HPV 6 and 11", "HPV 13 and 32", "HPV 31 and 33"],
                answer: 1,
                explanation: ""
              }
            ]
          },
          "zoonotic-misc": {
            name: "Zoonotic Diseases & Miscellaneous",
            emoji: "🐾",
            questions: [
              {
                q: "A 28-month-old boy is brought to the paediatrician for a routine evaluation. On examination, he had a depressed nasal bridge, notched incisors, and bowing of the tibia are also observed. He was born via vaginal delivery. The mother received minimal antenatal care. During the third trimester, the mother had developed a disseminated maculopapular rash over the palms and soles. What is the most standard serological test employed for diagnosis of congenital syphilis?",
                options: ["Gram's stain", "IgM FTA-ABS test", "Blood culture", "RPR test"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 39-year-old butcher presented with fever and joint pain for the last two months. He subsequently developed an abscess in the right iliac fossa. His blood culture grew gram-negative coccobacilli. What is the likely organism causing this condition?",
                options: ["Brucella melitensis", "Bacillus anthracis", "Mycobacterium bovis", "Staphylococcus aureus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 7-day-old baby, delivered by normal vaginal delivery, had congestion of both the eyes with mucopurulent discharge. Gram-stained smear of the discharge showed many pus cells and no organisms. Which of the following could be the most likely etiological agent?",
                options: ["Neisseria gonorrhoea", "Staphylococcus aureus", "Candida albicans", "Chlamydia trachomatis"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 65-year-old man with uncontrolled diabetes developed swollen eyelids and serosanguinous nasal discharge. A fungus with broad aseptate hyphae was isolated from the lesion. What is the most likely causative agent?",
                options: ["Fusarium spp.", "Mucor spp.", "Aspergillus spp.", "Candida spp."],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 60-year-old farmer from rural Australia is admitted to the hospital with a high fever, severe headache, and neck stiffness. He has a 4-day history of general malaise, nausea, and vomiting. He mentions that his pigs have recently been suffering from an illness characterized by high fever and neurological signs. What is the most likely causative agent?",
                options: ["Brucellosis", "Anthrax", "Q fever", "Japanese encephalitis"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 12-year-old boy visited the hospital complaining of difficulty in swallowing liquids, loss of appetite and restlessness. One month back he had been bitten by a street dog. Which of the following is the gold standard method for antemortem diagnosis of rabies?",
                options: ["Antibody detection", "Negri body detection", "Direct Immunofluorescence test", "Virus isolation"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 28-year-old man is brought to the emergency department by his family with a two-day history of fever, headache, and general malaise. His symptoms rapidly progressed to include agitation, confusion, and hydrophobia. The family mentions he was bitten by a stray dog three weeks ago. Which of the following is the most appropriate post-exposure prophylaxis (PEP) for a severe bite from a potentially rabid animal?",
                options: ["A single dose of rabies vaccine", "Observation of the animal for 10 days only", "Human rabies immune globulin (HRIG) and a series of rabies vaccinations", "Antibiotics to prevent secondary bacterial infection"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 45-year-old man who recently went hiking in a wooded area presents to his physician with a characteristic \"bull's-eye\" rash on his thigh. He reports feeling fatigued with flu-like symptoms, including a low-grade fever and muscle aches. He recalls finding and removing a tick after his hike. What is the most likely pathogen causing this condition?",
                options: ["Yersinia pestis", "Borrelia burgdorferi", "Scrub Typhus", "Rickettsia rickettsii"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 30-year-old pregnant woman presents for a prenatal checkup. Her blood tests reveal a recent Toxoplasma gondii infection. She has a history of changing her cat's litter box and also enjoys gardening. She has not reported any clinical symptoms. What is the most likely mode of transmission in this condition?",
                options: ["Autoinfection", "By eating undercooked meat", "By contaminated garden soil", "Through contaminated water supply"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 45-year-old parrot breeder develops a severe pneumonia with a persistent dry cough, fever, and headache. He works closely with various exotic birds and mentions some of his birds have been lethargic. His chest X-ray shows diffuse infiltrates. Which of the following is the most likely infectious agent responsible for this illness?",
                options: ["Chlamydophila psittaci", "Avian Influenza virus (H5N1)", "Streptococcus pneumoniae", "Legionella pneumophila"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 38-year-old man who is a chronic soft contact lens wearer presents to the emergency room with severe pain, redness, and purulent discharge in his right eye. He has kept his lenses in continuously for several days and admits to not cleaning them properly. Slit-lamp examination reveals a large, central, yellow-white corneal infiltrate with significant stromal edema. Which of the following is the most likely causative organism?",
                options: ["Acanthamoeba species", "Herpes simplex virus (HSV)", "Staphylococcus aureus", "Aspergillus spp"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 45-year-old male farmer presents with a slowly progressive corneal ulcer in his left eye following a minor trauma with a tree branch two weeks ago. On examination, the corneal infiltrate has feathery, branching edges and is elevated, with satellite lesions visible around the main ulcer. There is no significant hypopyon. The patient is diagnosed with fungal keratitis. What is the most standard test employed for diagnosis of this condition?",
                options: ["Gram's stain", "Fungal culture", "KOH mount", "Wet mount"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A newborn infant is having sensorineural deafness, cataract, and patent ductus arteriosus. The mother gives history of rash during her first trimester. What is the most likely cause of this condition?",
                options: ["Congenital toxoplasmosis", "Congenital cytomegalovirus infection", "Congenital rubella syndrome", "Neonatal herpes"],
                answer: 2,
                explanation: ""
              },
              {
                q: "There was an outbreak of conjunctivitis in children's summer camp along with pharyngitis, fever, and preauricular lymphadenopathy. What is the most probable causative agent?",
                options: ["Cytomegalovirus", "Adenovirus", "Varicella-zoster virus", "Coxsackie virus"],
                answer: 1,
                explanation: ""
              }
            ]
          },
          "hai": {
            name: "Healthcare-Associated Infections (HAI)",
            emoji: "🏥",
            questions: [
              {
                q: "A batch of surgical instruments was autoclaved at 121°C for 15 minutes. After the cycle, the indicator tape did not change colour. What should be the next step?",
                options: ["Use the instruments immediately", "Re-autoclave the load after checking for air entrapment", "Use dry heat sterilisation instead", "Increase pressure to 30 psi"],
                answer: 1,
                explanation: ""
              },
              {
                q: "An endoscope is to be prepared for use in a diagnostic procedure. Which method is most appropriate?",
                options: ["Boiling for 10 minutes", "Autoclaving", "2% glutaraldehyde for 20 minutes", "UV exposure"],
                answer: 2,
                explanation: ""
              },
              {
                q: "After ETO sterilisation, catheters are aerated for several hours before use. Why?",
                options: ["To reduce humidity", "To remove toxic gas residues", "To prevent corrosion", "To ensure mechanical drying"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A nurse spills blood on the floor near a patient's bed. The most appropriate disinfectant for immediate use is:",
                options: ["1% sodium hypochlorite", "70% alcohol", "2% glutaraldehyde", "Lysol"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following disinfectant is currently NOT used for fogging of operation theatres?",
                options: ["Formaldehyde", "Glutaraldehyde based", "Hydrogen peroxide based", "Quaternary ammonium compound"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Geobacillus stearothermophilus is used as indicator for efficacy of:",
                options: ["Hot air oven", "Autoclave", "Filtration", "Ultraviolet rays"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following disinfectant is used in PLASMA STERILISATION?",
                options: ["Formaldehyde", "Glutaraldehyde", "Hydrogen peroxide", "Ethylene Oxide"],
                answer: 2,
                explanation: ""
              },
              {
                q: "After autoclaving, biological indicator Geobacillus stearothermophilus spores survive. What does this imply?",
                options: ["Sterilisation incomplete", "Overheating occurred", "Indicator defective", "Autoclave overloaded"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The CSSD officer notes that sterile instruments are being stored near a sink. What is the concern?",
                options: ["Risk of corrosion", "Moisture may cause contamination", "Indicator colour may fade", "Temperature fluctuations"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Hair removal for a hernia repair is advised immediately before surgery rather than the previous night. Why?",
                options: ["For cosmetic reasons", "To prevent skin irritation", "To avoid bacterial colonisation in micro-cuts", "To reduce operative time"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A patient with a femoral central line develops fever after 4 days. Blood culture shows S. epidermidis. What is the best next step?",
                options: ["Ignore as contaminant", "Remove the catheter and culture the tip", "Continue same line and add antibiotics", "Replace line over a guide wire"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A nurse accidentally sustains a needle-stick injury from an HIV-positive patient. What is the first immediate step?",
                options: ["Apply antiseptic and bandage", "Wash the area with soap and running water", "Suck out the blood", "Report after finishing duty"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A student doctor gets a deep needle-stick injury from a patient with unknown status. What tests should be done immediately on the patient?",
                options: ["Only HBsAg", "HIV, HBV, and HCV serology", "HIV ELISA only", "No tests until symptoms appear"],
                answer: 1,
                explanation: ""
              },
              {
                q: "After a needle-stick injury, the intern squeezes the puncture site to promote bleeding. What is the correct advice?",
                options: ["It helps remove virus", "It increases local tissue damage", "It reduces viral load", "It prevents scarring"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A patient on mechanical ventilation for > 48 hours develops fever, purulent secretions, and new infiltrate. What is the most likely diagnosis?",
                options: ["Aspiration pneumonitis", "Community-acquired pneumonia", "Ventilator-associated pneumonia", "Bronchial asthma"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Raising the head of the bed to 30–45° helps prevent VAP because it—",
                options: ["Improves ventilation", "Prevents aspiration of secretions", "Enhances oxygen diffusion", "Keeps airway dry"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Regular oral care with chlorhexidine reduces VAP risk by—",
                options: ["Decreasing oropharyngeal colonisation", "Removing endotracheal biofilm", "Promoting saliva flow", "Improving taste sensation"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The nurse hangs the urine bag above the patient's bladder for convenience. What is the likely outcome?",
                options: ["Faster drainage", "No effect", "Backflow leading to CAUTI", "Catheter blockage"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Plastic infectious items should be segregated in which colour bag?",
                options: ["Yellow", "Blue", "Red", "White"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Before segregation of microbiological wastes, pre-treatment with what concentration of hypochlorite is recommended?",
                options: ["1–2%", "10%", "5%", "15%"],
                answer: 0,
                explanation: ""
              }
            ]
          },
          "amr-amsp": {
            name: "Antimicrobial Resistance (AMR) & Stewardship (AMSP)",
            emoji: "💊",
            questions: [
              {
                q: "Antimicrobial stewardship program in a hospital is required for the following reasons, except:",
                options: ["Rapid development of antimicrobial resistance", "Misuse and over-use of antimicrobials", "Widespread use of antimicrobials in humans compared to animal industry", "Poor antimicrobial research"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Who can act as antimicrobial steward?",
                options: ["Infectious disease physician", "Clinical microbiologists", "Medicine consultant", "Any of the above"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which is not a back end Strategy of Antimicrobial stewardship program?",
                options: ["Prospective audit and feedback is an example", "Formulary restriction is an example", "It is labour intensive than front-end strategy", "Sustainable than front-end strategy"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which is the correct method of framing anti-microbial policy by Antimicrobial stewardship (AMS) team?",
                options: ["AMS team discuss with each other and frame the policy based on the standard guideline", "AMS team discuss with each other and frame the policy based on the standard guideline as well as local AMR pattern", "AMS team discuss with each other and frame the policy based on the standard guideline as well as local AMR pattern, then discuss with each clinicians for their suggestions", "AMS team just copy the guideline from any other renowned institute of India"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Maximum consumption of antibiotics occurs for:",
                options: ["Human therapeutic use", "Human non-therapeutic use", "Animal therapeutic use", "Animal non-therapeutic use"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following is the most successful strategy of antimicrobial stewardship program (AMSP)?",
                options: ["Formulary restrictions", "Antibiotic cycling", "Prospective audit and feedback", "Antibiotic review method"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following antimicrobial stewardship program (AMSP) strategy provides immediate impact but unsustainable?",
                options: ["Formulary restrictions", "Antibiotic cycling", "Prospective audit and feedback", "Antibiotic review method"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All of the following are examples of restricted antimicrobials, EXCEPT:",
                options: ["Colistin", "Carbapenem", "Ceftriaxone", "Tigecycline"],
                answer: 2,
                explanation: ""
              },
              {
                q: "In which of the following infectious disease, antibiotics are required?",
                options: ["Diarrhoea", "Influenza", "COVID-19", "Dengue", "Malaria", "None of the above"],
                answer: 5,
                explanation: ""
              },
              {
                q: "Empirical antibiotic should be given based on all of the following, EXCEPT:",
                options: ["The infective syndrome likely to be present", "The common etiological bacterial agents for that infective syndrome", "The local antibiogram for those organisms, indicating the antimicrobial resistance pattern", "Antimicrobial susceptibility report"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Targeted antibiotic therapy should be given based on:",
                options: ["The infective syndrome likely to be present", "The common etiological bacterial agents for that infective syndrome", "The local antibiogram for those organisms, indicating the antimicrobial resistance pattern", "Antimicrobial susceptibility report"],
                answer: 3,
                explanation: ""
              },
              {
                q: "In urinary tract infection (UTI): All the following antibiotics are given, EXCEPT?",
                options: ["Azithromycin", "Ciprofloxacin", "Nitrofurantoin", "Cotrimoxazole"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The following are the uses of antibiogram, EXCEPT:",
                options: ["It guides the clinicians in selecting the best empirical antimicrobial treatment in the event of pending culture and susceptibility results", "It is also an useful tool for detecting and monitoring trends in antimicrobial resistance within the hospital", "Antibiogram can also be used to compare susceptibility rates across institutions and track resistance trends and thereby contributing to national AMR surveillance database", "Useful to guide the clinicians in selecting the best targeted antibiotic therapy"],
                answer: 3,
                explanation: ""
              }
            ]
          }
        }
      }
    }
  },

  patho: {
    name: "Pathology",
    emoji: "🧪",
    enabled: true,
    papers: {
      paper2: {
        name: "Paper 2",
        enabled: true,
        chapters: {
          "git-salivary": {
            name: "Gastrointestinal Tract & Salivary Glands",
            emoji: "🍽️",
            questions: [
              {
                q: "A 48-year-old man with a 10-year history of gastroesophageal reflux presents with progressive dysphagia. Endoscopy reveals replacement of the distal esophageal squamous epithelium by intestinal-type columnar cells containing goblet cells. Which condition best fits these findings?",
                options: ["Barrett's esophagus", "Esophageal varices", "Achalasia", "Esophagitis"],
                answer: 0,
                explanation: "Replacement of distal squamous epithelium by intestinal-type columnar cells with goblet cells = Barrett's esophagus, a metaplastic, premalignant change driven by chronic reflux."
              },
              {
                q: "A 62-year-old woman presents with weight loss and persistent epigastric discomfort. Endoscopic biopsy of the stomach shows malignant gland-forming epithelial cells. What is the most common type of gastric cancer?",
                options: ["Lymphoma", "Carcinoid tumor", "Adenocarcinoma", "Gastrointestinal stromal tumor (GIST)"],
                answer: 2,
                explanation: "Adenocarcinoma accounts for the vast majority (~90%) of gastric malignancies and is gland-forming."
              },
              {
                q: "A 30-year-old patient with a known history of ulcerative colitis is admitted with abdominal distension, fever, and severe pain. Imaging shows a massively dilated colon with risk of perforation. Which complication is most likely?",
                options: ["Colonic stricture", "Toxic megacolon", "Fistula formation", "Perforation of the bowel"],
                answer: 1,
                explanation: "Massive colonic dilatation with systemic toxicity in UC = toxic megacolon, which carries a high risk of perforation."
              },
              {
                q: "A 45-year-old man presents with chronic epigastric pain relieved by meals. Endoscopy reveals a duodenal ulcer. Which pathogen is most commonly associated with peptic ulcer disease?",
                options: ["Escherichia coli", "Clostridium difficile", "Helicobacter pylori", "Salmonella"],
                answer: 2,
                explanation: "H. pylori is the dominant cause of peptic ulcer disease, especially duodenal ulcers."
              },
              {
                q: "Biopsy of the colon in a patient with chronic bloody diarrhoea shows mucosal ulceration with crypt abscesses filled with neutrophils. This histopathology is typical of:",
                options: ["Crohn's disease", "Ulcerative colitis", "Colorectal cancer", "Diverticulitis"],
                answer: 1,
                explanation: "Continuous mucosal ulceration with crypt abscesses (neutrophils in crypts) is characteristic of ulcerative colitis."
              },
              {
                q: "A 55-year-old man with a 20-year history of heavy alcohol intake presents with ascites, jaundice, and spider angiomas. The primary risk factor for his liver disease is:",
                options: ["Viral hepatitis", "Alcohol abuse", "Non-alcoholic fatty liver disease", "Hemochromatosis"],
                answer: 1,
                explanation: "The long history of heavy alcohol use points to alcoholic liver disease/cirrhosis as the cause of the stigmata of chronic liver disease."
              },
              {
                q: "A pathologist is staging a resected colon carcinoma based on depth of tumor invasion and lymph node involvement according to a classic system. Which staging system is being used?",
                options: ["Ann Arbor staging", "Clark staging", "Dukes staging", "FIGO staging"],
                answer: 2,
                explanation: "Dukes staging classifies colorectal carcinoma by depth of bowel-wall invasion and lymph node involvement. (Ann Arbor = lymphoma, Clark = melanoma, FIGO = gynae cancers.)"
              },
              {
                q: "A 50-year-old diabetic patient complains of early satiety, bloating, and nausea. Gastric emptying study shows significant delay with no mechanical obstruction. Which condition explains these findings?",
                options: ["Achalasia", "Gastroparesis", "Pyloric stenosis", "Peptic ulcer disease"],
                answer: 1,
                explanation: "Delayed gastric emptying without mechanical obstruction in a diabetic = gastroparesis (autonomic neuropathy of the stomach)."
              },
              {
                q: "A patient with long-standing gastroesophageal reflux undergoes endoscopy, which reveals areas of metaplastic columnar epithelium in the distal esophagus. This premalignant change is a risk factor for which condition?",
                options: ["Barrett's esophagus", "Gastroesophageal reflux disease (GERD)", "Esophageal strictures", "Laryngopharyngeal reflux"],
                answer: 0,
                explanation: "The columnar (intestinal) metaplasia itself is Barrett's esophagus — the premalignant lesion that predisposes to esophageal adenocarcinoma."
              },
              {
                q: "A 25-year-old woman presents with abdominal pain, chronic diarrhoea, and weight loss. Colonoscopy shows areas of normal mucosa alternating with patches of ulceration throughout the GI tract, including the terminal ileum. These characteristic skip lesions are seen in:",
                options: ["Ulcerative colitis", "Celiac disease", "Crohn's disease", "Diverticular disease"],
                answer: 2,
                explanation: "Skip lesions, terminal ileal involvement, and transmural disease are hallmarks of Crohn's disease."
              },
              {
                q: "A 50-year-old mason has a history of tobacco chewing for 25 years. He has now developed carcinoma. Which of the following locations is most likely for the development of carcinoma?",
                options: ["Floor of the mouth", "Lower lip", "Tongue", "Buccal mucosa"],
                answer: 3,
                explanation: "With smokeless tobacco/areca chewing, the quid sits against the buccal mucosa, making it the most common site of oral SCC in chewers."
              },
              {
                q: "A 24-year-old male with a 4-year history of abdominal pain, periodic diarrhoea, low-grade fever, and easy fatiguability is found to have an enteric fistula; contrast radiography shows cobblestone mucosa with linear alterations that skip areas of normal bowel wall. Which of the following best explains the formation of fistula in this patient?",
                options: ["Intramural granuloma", "Transmural inflammation", "Lymphoid reaction", "Skip lesions of the intestinal wall"],
                answer: 1,
                explanation: "Crohn's disease causes transmural inflammation, which allows sinus tracts and fistulae to penetrate the full bowel wall."
              },
              {
                q: "A 50-year-old male presents with diarrhoea, flushing and wheezing. Examination shows a grade II/VI diastolic murmur at the right sternal border at the fourth intercostal space. Which substance is most likely to be elevated in this patient's urine?",
                options: ["5-HIAA", "HVA", "Phenylalanine", "Selegiline"],
                answer: 0,
                explanation: "Diarrhoea, flushing, wheezing and right-sided valve disease = carcinoid syndrome; urinary 5-HIAA (serotonin metabolite) is elevated."
              },
              {
                q: "Biopsy of a small rounded rectal polyp demonstrates glands with a saw-tooth contour, composed of proliferating goblet and columnar epithelial cells. No atypia is seen. This polyp is best classified as:",
                options: ["Hyperplastic polyp", "Peutz-Jeghers polyp", "Tubular adenoma", "Tubulovillous adenoma"],
                answer: 0,
                explanation: "A saw-tooth (serrated) glandular profile without atypia is the classic histology of a hyperplastic polyp."
              },
              {
                q: "A 50-year-old male presents with obstructive symptoms. Biopsy of the stomach reveals a Gastrointestinal Stromal Tumour (GIST). The most appropriate marker for this tumour is:",
                options: ["CD 34", "CD117", "CD 30", "CD 10"],
                answer: 1,
                explanation: "GISTs arise from interstitial cells of Cajal and characteristically express CD117 (c-KIT)."
              }
            ]
          },
          "liver-biliary": {
            name: "Liver & Hepatobiliary System",
            emoji: "🫀",
            questions: [
              {
                q: "In a liver biopsy from a patient with cirrhosis, collagen deposition is noted in the space of Disse. Which cell type is responsible for this fibrosis?",
                options: ["Hepatocytes", "Biliary epithelial cells", "Kupffer cells", "Hepatic stellate cells"],
                answer: 3,
                explanation: "Hepatic stellate (Ito) cells in the space of Disse transform into myofibroblasts and deposit collagen, driving hepatic fibrosis."
              },
              {
                q: "A 45-year-old obese female presents with recurrent right upper quadrant pain. Ultrasound shows gallstones. Which factor predisposes to cholesterol gallstone formation?",
                options: ["Biliary infection", "Chronic haemolysis", "Hypermotility of gallbladder", "Supersaturation of bile with cholesterol"],
                answer: 3,
                explanation: "Cholesterol stones form when bile is supersaturated with cholesterol (plus gallbladder hypomotility and nucleation). Haemolysis predisposes to pigment stones."
              },
              {
                q: "A liver biopsy of a 25-year-old male presenting with jaundice shows ground-glass hepatocytes with portal fibrosis and mononuclear infiltrate. Which is the most likely diagnosis?",
                options: ["Acute hepatitis A infection", "Chronic hepatitis B infection", "Cirrhosis", "Fatty liver"],
                answer: 1,
                explanation: "Ground-glass hepatocytes (HBsAg-laden smooth ER) are characteristic of chronic hepatitis B infection."
              },
              {
                q: "A 50-year-old male with chronic liver disease develops portal hypertension. The increased resistance to blood flow is due to:",
                options: ["Decreased portal blood oxygenation", "Decreased release of angiotensinogen", "Increased nitric oxide production", "Intrahepatic shunts"],
                answer: 3,
                explanation: "In cirrhosis, sinusoidal remodelling and intrahepatic vascular shunts (plus increased sinusoidal resistance) raise portal pressure."
              },
              {
                q: "A 50-year-old chronic alcoholic exposed to aflatoxin presents with a liver mass. Which malignancy is most likely?",
                options: ["Cholangiocarcinoma", "Hepatoblastoma", "Hepatocellular adenoma", "Hepatocellular carcinoma"],
                answer: 3,
                explanation: "Chronic alcohol plus aflatoxin (TP53 mutation) are major risk factors for hepatocellular carcinoma."
              },
              {
                q: "In a patient recovering from hepatitis B infection, persistence of which marker after jaundice suggests progression to chronic hepatitis?",
                options: ["Anti-HBc antibody", "Anti-HBe antibody", "HBsAg", "HBeAg"],
                answer: 2,
                explanation: "Persistence of HBsAg beyond ~6 months indicates failure to clear the virus and progression to chronic hepatitis B."
              },
              {
                q: "A 60-year-old alcoholic man presents with confusion and lethargy. Examination shows jaundice and ascites. Labs reveal increased PT and APTT with significantly increased serum ammonia. Which physical finding would you expect that is relevant to the ammonia level?",
                options: ["Asterixis", "Capillary telangiectasias", "Caput medusae", "Palmar erythema"],
                answer: 0,
                explanation: "Hyperammonaemia causes hepatic encephalopathy, whose classic sign is asterixis (flapping tremor)."
              },
              {
                q: "A 28-year-old woman presents with fever, malaise and yellow eyes. She denies alcohol abuse. Labs show increased AST, ALT and increased IgM anti-hepatitis A titres. Which is the most likely outcome of this infection?",
                options: ["Cirrhosis", "Complete resolution", "Chronic carrier state", "Fulminant hepatitis"],
                answer: 1,
                explanation: "Hepatitis A is self-limiting; it does not cause a chronic carrier state, and almost always resolves completely."
              },
              {
                q: "A 30-year-old woman seeking pregnancy has prenatal testing: HBsAg (-), anti-HBs (+), anti-HBc (-), anti-HBe (-), HBV DNA (-). Which status does this represent?",
                options: ["Hepatitis B carrier", "Immunized against hepatitis B", "Infected and within the window period", "Infected with hepatitis B and highly transmissible"],
                answer: 1,
                explanation: "Isolated anti-HBs positivity with negative anti-HBc indicates vaccine-induced immunity (no natural infection)."
              },
              {
                q: "A 40-year-old multigravida presents with nausea, vomiting, fever and right upper quadrant pain. Examination shows arrested inspiration on palpation of the RUQ (Murphy sign). Labs reveal neutrophilia with left shift. Which is the most likely diagnosis?",
                options: ["Acute cholecystitis", "Carcinoma of ampulla of Vater", "Cholangiocarcinoma", "Cholesterolosis"],
                answer: 0,
                explanation: "A positive Murphy sign with fever and neutrophilia is classic for acute cholecystitis."
              }
            ]
          },
          "respiratory": {
            name: "Respiratory System",
            emoji: "🫁",
            questions: [
              {
                q: "A 28-year-old school teacher develops sudden onset of cough, mild fever, and runny nose after a cold. Chest exam is clear and sputum culture is negative. Most likely cause?",
                options: ["Bacterial infection", "Viral infection", "Fungal infection", "Allergens"],
                answer: 1,
                explanation: "Mild upper respiratory symptoms after a cold with a negative bacterial culture point to a viral infection."
              },
              {
                q: "A 64-year-old man with a 40-pack-year history presents with hemoptysis and a central hilar mass on CT. Which lung cancer is most strongly linked to cigarette smoking?",
                options: ["Adenocarcinoma", "Small cell lung carcinoma", "Large cell carcinoma", "Squamous cell carcinoma"],
                answer: 1,
                explanation: "Small cell carcinoma is central and has the strongest association with smoking. (Squamous cell carcinoma is also central and smoking-related — a common distractor here.)"
              },
              {
                q: "A 16-year-old girl reports recurrent night-time wheeze and breathlessness. Sputum smear shows Charcot-Leyden crystals. Which inflammatory cell predominates?",
                options: ["Neutrophilic infiltration", "Eosinophilic infiltration", "Lymphocytic infiltration", "Fibroblast proliferation"],
                answer: 1,
                explanation: "Charcot-Leyden crystals derive from eosinophil membrane protein (galectin-10); asthma is eosinophil-driven."
              },
              {
                q: "A 70-year-old smoker has chronic cough, exertional dyspnea, and an FEV1/FVC ratio of 55% with no significant bronchodilator response. Characteristic feature?",
                options: ["Reversible airway obstruction", "Irreversible airway obstruction", "Only emphysema", "Restrictive lung disease"],
                answer: 1,
                explanation: "A low FEV1/FVC that does not reverse with bronchodilator defines COPD — fixed, irreversible airway obstruction."
              },
              {
                q: "A 62-year-old man on long-term amiodarone therapy complains of progressive breathlessness. HRCT shows a reticular pattern and honeycombing. Key pathologic change?",
                options: ["Cough and wheezing", "Alveolar destruction", "Scarring of lung tissue", "Airway hyperreactivity"],
                answer: 2,
                explanation: "Honeycombing on HRCT indicates pulmonary fibrosis — scarring of lung tissue (here, amiodarone-induced)."
              },
              {
                q: "A 35-year-old African-American woman has bilateral hilar lymphadenopathy and skin nodules. Lung biopsy reveals granulomas without central necrosis. Typical histology?",
                options: ["Caseating granulomas", "Non-caseating granulomas", "Cavitary lesions", "Interstitial fibrosis"],
                answer: 1,
                explanation: "Sarcoidosis classically shows non-caseating (non-necrotizing) granulomas with bilateral hilar lymphadenopathy."
              },
              {
                q: "A 22-year-old student presents with episodic wheezing and cough after dust exposure. Sputum smear shows coiled mucous plugs. These are known as:",
                options: ["Chronic bronchitis", "Asthma", "Tuberculosis", "Pneumonia"],
                answer: 1,
                explanation: "Coiled mucous plugs (Curschmann spirals) in sputum, with episodic wheeze, indicate asthma."
              },
              {
                q: "A 58-year-old obese smoker has chronic productive cough, peripheral edema, and cyanosis. Which chronic lung disease fits this blue bloater phenotype?",
                options: ["Asthma", "Emphysema", "Chronic bronchitis", "Pulmonary fibrosis"],
                answer: 2,
                explanation: "Blue bloater = chronic bronchitis: productive cough, hypoxaemia/cyanosis, and cor pulmonale with edema."
              },
              {
                q: "A 67-year-old retired shipyard worker presents with progressive dyspnea. Histology of lung tissue shows beaded, iron-coated fibers. These are characteristic of:",
                options: ["Silicosis", "Asbestosis", "Coal worker's pneumoconiosis", "Berylliosis"],
                answer: 1,
                explanation: "Beaded, iron-coated (ferruginous) fibers = asbestos bodies; shipyard work is a classic asbestos exposure."
              },
              {
                q: "A 45-year-old patient has repeated episodes of pneumonia since childhood and CT shows bronchiectasis. Sweat chloride is markedly elevated. Underlying disease?",
                options: ["Cystic fibrosis", "Asthma", "COPD", "Bronchiolitis obliterans"],
                answer: 0,
                explanation: "Recurrent infections, bronchiectasis, and raised sweat chloride are diagnostic of cystic fibrosis (CFTR defect)."
              }
            ]
          },
          "cardiovascular": {
            name: "Cardiovascular System",
            emoji: "❤️",
            questions: [
              {
                q: "A 45-year-old woman with a history of infective endocarditis of the mitral valve suddenly develops weakness of the right arm. Embolic phenomena are suspected. Vegetations from the mitral valve are least likely to embolize to which organ?",
                options: ["Brain", "Liver", "Spleen", "Lung"],
                answer: 3,
                explanation: "Mitral (left-sided) vegetations embolize into the systemic circulation (brain, spleen, kidney). The lung is supplied by right-sided emboli, so it is least likely."
              },
              {
                q: "A 12-year-old boy presents with fever, migratory polyarthritis, and a new heart murmur. He is diagnosed with acute rheumatic fever. Which cardiac valve is least commonly involved?",
                options: ["Mitral", "Aortic", "Pulmonary", "Tricuspid"],
                answer: 2,
                explanation: "Rheumatic involvement follows mitral > aortic > tricuspid; the pulmonary valve is least commonly affected."
              },
              {
                q: "A 58-year-old smoker presents with crushing chest pain. ECG shows ST-elevation in the anterior leads. Which coronary artery is most commonly the culprit in myocardial infarction?",
                options: ["Right coronary", "Left coronary trunk", "Left anterior descending (LAD)", "Left circumflex"],
                answer: 2,
                explanation: "The LAD is the most commonly involved coronary artery in MI and supplies the anterior wall/anterior septum."
              },
              {
                q: "Two weeks after an acute myocardial infarction, a 60-year-old develops fever, chest pain, and a pericardial friction rub. There is no evidence of infection. This presentation is typical of which condition?",
                options: ["Viral pericarditis", "Bacterial pericarditis", "Fungal pericarditis", "Dressler's syndrome"],
                answer: 3,
                explanation: "Dressler's syndrome is an autoimmune (post-MI) pericarditis occurring weeks after infarction."
              },
              {
                q: "A histologic section of the heart taken 72 hours after an MI is examined. Which cell type predominates in the infarcted area at this stage?",
                options: ["Neutrophils", "Lymphocytes", "Macrophages", "Monocytes"],
                answer: 0,
                explanation: "At 1-3 days post-MI, neutrophils predominate. Macrophages take over from about day 3-7 as they clear necrotic debris."
              },
              {
                q: "While evaluating a patient with suspected rheumatic fever, you review the Jones major criteria. All of the following are major criteria except:",
                options: ["Pancarditis", "Arthritis", "Subcutaneous nodules", "Erythema nodosum"],
                answer: 3,
                explanation: "Jones major criteria include carditis, polyarthritis, subcutaneous nodules, chorea, and erythema MARGINATUM — not erythema nodosum."
              },
              {
                q: "A 14-year-old girl presents with fever and migratory joint pain. Endomyocardial biopsy shows foci of fibrinoid necrosis with Anitschkow cells. These are known as Aschoff bodies and are diagnostic of:",
                options: ["Acute rheumatic fever", "Systemic lupus erythematosus", "Subacute bacterial endocarditis", "Tuberculosis"],
                answer: 0,
                explanation: "Aschoff bodies (fibrinoid necrosis with Anitschkow cells) are pathognomonic of acute rheumatic fever."
              },
              {
                q: "A 45-year-old man with long-standing hyperlipidemia undergoes an autopsy study. On the aortic intima, small yellow flat lesions composed of lipid-laden macrophages are seen — the earliest lesion of atherosclerosis. Where are such fatty streaks typically found?",
                options: ["Fatty liver", "Pancreatitis", "Aorta", "Breast"],
                answer: 2,
                explanation: "Fatty streaks (lipid-laden foam cell macrophages) are the earliest atherosclerotic lesion and are typically found in the aorta."
              },
              {
                q: "A 14-year-old girl presents with fever and migratory joint pain. Endomyocardial biopsy shows foci of fibrinoid necrosis with Anitschkow cells. These cells are derived from:",
                options: ["Plasma cells", "Macrophages", "Lymphocytes", "Neutrophils"],
                answer: 1,
                explanation: "Anitschkow cells (caterpillar cells) are activated macrophages found within Aschoff bodies."
              },
              {
                q: "A 10-year-old girl presents with fever and painful swelling of large joints 3 weeks after a sore throat. On auscultation, a diastolic murmur is heard over the apex. Which criteria are used in the diagnosis of this condition?",
                options: ["Duke criteria", "Jones criteria", "ACR criteria", "New York criteria"],
                answer: 1,
                explanation: "Acute rheumatic fever is diagnosed using the (modified) Jones criteria. Duke criteria are for infective endocarditis."
              },
              {
                q: "A 9-year-old boy presents with fever and migratory joint pain. Endomyocardial biopsy shows foci of fibrinoid necrosis with Anitschkow cells. Which of the following statements is TRUE?",
                options: ["Vegetations are large and friable", "Fibrinous pericarditis is seen", "Fish-mouth or button-hole stenosis of the mitral valve is seen in the acute phase", "MacCallum's patch is seen in the anterior wall of the right atrium"],
                answer: 1,
                explanation: "Acute rheumatic carditis causes fibrinous (bread-and-butter) pericarditis. Vegetations are small and firm (not friable), fish-mouth stenosis is a CHRONIC change, and MacCallum's patch is in the LEFT atrium."
              }
            ]
          },
          "urinary": {
            name: "Urinary Tract",
            emoji: "🫘",
            questions: [
              {
                q: "A 40-year-old man presents with flank pain and a family history of kidney cysts. Imaging shows multiple bilateral renal cysts. Which statement is NOT true about this condition?",
                options: ["Autosomal dominant inheritance", "Hypertension is rare", "Can be associated with cysts in liver, lungs and pancreas", "Pyelonephritis is common"],
                answer: 1,
                explanation: "In adult (autosomal dominant) polycystic kidney disease, hypertension is COMMON, not rare — so that statement is false."
              },
              {
                q: "A 35-year-old woman develops hematuria and progressive renal insufficiency. Biopsy confirms a primary glomerulonephritis. Which is the most common cause of glomerulonephritis in adults?",
                options: ["Minimum change disease", "Membranous glomerulonephritis", "Membranoproliferative glomerulonephritis", "IgA nephropathy"],
                answer: 3,
                explanation: "IgA nephropathy (Berger disease) is the most common primary glomerulonephritis worldwide in adults."
              },
              {
                q: "A 6-year-old child presents with generalized edema and heavy proteinuria. Renal function is otherwise normal. The most common cause of nephrotic syndrome in children is:",
                options: ["Acute post-streptococcal glomerulonephritis", "Minimal change disease", "Membranoproliferative glomerulonephritis", "Rapidly progressive glomerulonephritis"],
                answer: 1,
                explanation: "Minimal change disease is the most common cause of nephrotic syndrome in children and responds well to steroids."
              },
              {
                q: "A 67-year-old man presents with painless hematuria. Imaging shows a mass in the renal pelvis. Which malignancy most commonly arises from the renal pelvis?",
                options: ["RCC", "Transitional cell carcinoma", "Melanoma", "Adenocarcinoma"],
                answer: 1,
                explanation: "The renal pelvis is lined by urothelium, so transitional cell (urothelial) carcinoma is the most common malignancy there."
              },
              {
                q: "A patient with chronic kidney disease develops confusion, asterixis, and altered mental status. Which manifestation of renal failure is usually due to uraemia?",
                options: ["Encephalopathy", "Hyperphosphataemia", "Hypertension", "Oedema"],
                answer: 0,
                explanation: "Uraemic encephalopathy produces confusion and asterixis; it reflects accumulation of nitrogenous wastes."
              },
              {
                q: "A child develops gross hematuria two weeks after a streptococcal throat infection. What is most important in the pathogenesis of this post-infectious glomerulonephritis?",
                options: ["Activation of alternative complement pathway", "Anti-basement membrane antibodies", "Direct podocyte injury", "Immune complex formation"],
                answer: 3,
                explanation: "Post-streptococcal GN is mediated by immune complex deposition (subepithelial humps) in the glomeruli."
              },
              {
                q: "A previously healthy 4-year-old presents with generalized edema and massive proteinuria. The most likely underlying disease is:",
                options: ["Dense deposit disease", "Focal & segmental glomerulosclerosis", "Membranous nephropathy", "Minimal change disease"],
                answer: 3,
                explanation: "Minimal change disease is the commonest cause of nephrotic syndrome in young children."
              },
              {
                q: "A 60-year-old man with long-standing uncontrolled hypertension now shows rapidly progressive renal failure. Which pathological lesion is most consistent?",
                options: ["Corticomedullary scarring", "Fibromuscular dysplasia", "Hyperplastic arteriolitis", "Papillary necrosis"],
                answer: 2,
                explanation: "Malignant hypertension causes hyperplastic arteriolosclerosis (onion-skin arterioles) with fibrinoid necrosis and rapid renal decline."
              },
              {
                q: "A patient is resuscitated after a cardiac arrest. Serum creatinine rises and oliguria develops. Which part of the nephron is most vulnerable to ischemic damage?",
                options: ["Ascending limb of the loop of Henle", "Distal convoluted tubule", "Glomerulus", "Proximal convoluted tubule"],
                answer: 3,
                explanation: "The proximal convoluted tubule (straight segment) and thick ascending limb are most vulnerable to ischemia; the PCT is the classic answer in acute tubular necrosis."
              },
              {
                q: "An elderly man develops acute pyelonephritis. What is the most common underlying cause?",
                options: ["Haematogenous spread of infection", "Malformation of the vesicoureteric junction", "Stasis of urine in the bladder", "Ureteric obstruction"],
                answer: 2,
                explanation: "Ascending infection from urinary stasis (e.g., bladder outlet obstruction in elderly men) is the most common cause of acute pyelonephritis."
              },
              {
                q: "A woman on long-term rifampicin therapy presents with fever, rash, and rising creatinine. She most likely has:",
                options: ["Haemolytic-uraemic syndrome", "IgA nephropathy", "Interstitial nephritis", "Light chain cast nephropathy"],
                answer: 2,
                explanation: "The triad of fever, rash, and rising creatinine after a drug (rifampicin) indicates acute (allergic) interstitial nephritis."
              },
              {
                q: "A 70-year-old man is found to have renal artery stenosis while being evaluated for secondary hypertension. Most common cause?",
                options: ["Atherosclerosis", "Dissection", "Fibromuscular dysplasia", "Vasculitis"],
                answer: 0,
                explanation: "In older patients, atherosclerosis is the most common cause of renal artery stenosis (fibromuscular dysplasia affects younger women)."
              },
              {
                q: "A 45-year-old man passes recurrent calcium oxalate kidney stones. The most common cause of renal calculi is:",
                options: ["Idiopathic hypercalciuria", "Hypercalcaemia", "Hyperuricosuria", "Infection"],
                answer: 0,
                explanation: "Calcium oxalate stones are the most common stones, and idiopathic hypercalciuria is their most frequent underlying cause."
              },
              {
                q: "A diabetic patient with acute pyelonephritis develops sudden flank pain and gross hematuria. A feared complication in such patients is:",
                options: ["Chronic pyelonephritis", "Haemorrhagic cystitis", "Papillary necrosis", "Tubular injury"],
                answer: 2,
                explanation: "Diabetics with pyelonephritis are prone to renal papillary necrosis, presenting with flank pain and hematuria from sloughed papillae."
              }
            ]
          },
          "male-genital": {
            name: "Male Genital Tract",
            emoji: "♂️",
            questions: [
              {
                q: "A 28-year-old man undergoing fertility evaluation has a testicular biopsy showing primary spermatocytes in Prophase I of meiosis. How long does Prophase I of the spermatocyte phase last?",
                options: ["2 hours", "24 hours", "2 days", "22 days"],
                answer: 3,
                explanation: "Prophase I of the primary spermatocyte is prolonged, lasting about 22 days."
              },
              {
                q: "Microscopic examination of spermatids shows PAS-positive granules, indicating formation of pro-acrosomal material. Which spermatid phase is this?",
                options: ["Golgi phase", "Cap phase", "Acrosome phase", "Maturation phase"],
                answer: 0,
                explanation: "Pro-acrosomal (PAS-positive) granules first appear in the Golgi phase of spermiogenesis."
              },
              {
                q: "A patient is given a drug that targets early spermatogenesis to improve fertility. The clinician wants to know when effects will be visible in sperm count. How long will it take for the effects to appear?",
                options: ["6 days", "16 days", "22 days", "86 days"],
                answer: 3,
                explanation: "Spermatogenesis plus epididymal transit takes roughly 64-74 days; effects on an ejaculated sperm count appear at about 86 days (~3 months)."
              },
              {
                q: "A 35-year-old male presents with erectile dysfunction. Neurological examination is normal, but Doppler studies show impaired penile blood flow. Which structures are mainly responsible for maintaining an erection?",
                options: ["Pacinian corpuscles", "Peripheral nerves", "Helicine arteries"],
                answer: 2,
                explanation: "Dilatation of the helicine arteries fills the corpora cavernosa and produces/maintains erection; impaired flow causes vasculogenic ED."
              },
              {
                q: "Testicular histology shows cells progressing through the first meiotic division. Which cells are undergoing this division?",
                options: ["Sertoli cells", "Spermatogonia", "Primary spermatocyte", "Secondary spermatocyte"],
                answer: 2,
                explanation: "The primary spermatocyte undergoes the first meiotic division to form secondary spermatocytes."
              }
            ]
          },
          "female-genital": {
            name: "Female Genital Tract",
            emoji: "♀️",
            questions: [
              {
                q: "A 32-year-old woman presents with pelvic pain, dysmenorrhea, and infertility. On laparoscopy, multiple lesions are seen on the ovary and fallopian tubes. Which of the following sites is least commonly affected by endometriosis?",
                options: ["Uterus", "Ovary", "Fallopian tube", "Liver"],
                answer: 3,
                explanation: "Endometriosis favours the ovary, pelvic peritoneum, and tubes. Distant sites like the liver are rarely involved."
              },
              {
                q: "A 40-year-old woman presents with an adnexal mass. Histopathology shows mature thyroid tissue within the ovary. This condition is known as:",
                options: ["Ovarian malformation", "Endometriosis of ovary", "Krukenberg tumor", "Germ cell tumor of the ovary"],
                answer: 3,
                explanation: "Thyroid tissue in the ovary is struma ovarii, a monodermal mature teratoma — a germ cell tumor of the ovary."
              },
              {
                q: "A 25-year-old female presents with a rapidly growing ovarian mass. On histopathology, the following tumors are considered germ cell in origin, except:",
                options: ["Dysgerminoma", "Embryonal carcinoma", "Mature teratoma", "Krukenberg tumor"],
                answer: 3,
                explanation: "Krukenberg tumor is a metastatic signet-ring (usually gastric) adenocarcinoma to the ovary — not a germ cell tumor."
              },
              {
                q: "A 22-year-old woman presents with an ovarian mass. Histology shows a mature cystic teratoma containing skin, hair, and sebaceous material. Which of the following is not malignant?",
                options: ["Mature teratoma", "Choriocarcinoma", "Dysgerminoma", "Embryonal carcinoma"],
                answer: 0,
                explanation: "Mature cystic teratoma (dermoid cyst) is benign; the others are malignant germ cell tumors."
              },
              {
                q: "A 28-year-old woman presents with fever, lower abdominal pain, and purulent vaginal discharge. Cervical cultures are sent. Which organism is most commonly associated with pelvic inflammatory disease?",
                options: ["Escherichia coli", "Neisseria gonorrhoeae", "Streptococcus pyogenes", "Staphylococcus aureus"],
                answer: 1,
                explanation: "Neisseria gonorrhoeae (with Chlamydia) is the classic cause of PID."
              },
              {
                q: "A 34-year-old woman with long-standing infertility and severe dysmenorrhea undergoes ultrasound, which shows a cystic ovarian lesion filled with thick, brown fluid. This is classically seen in:",
                options: ["Ovarian carcinoma", "Endometriosis", "Polycystic ovarian syndrome", "Hydatidiform mole"],
                answer: 1,
                explanation: "A chocolate cyst (endometrioma) filled with old brown blood is characteristic of ovarian endometriosis."
              },
              {
                q: "A 50-year-old multiparous woman presents with irregular vaginal bleeding and foul-smelling discharge. On examination, there is a friable cervical growth. Biopsy confirms carcinoma cervix. The most common histological type is:",
                options: ["Adenocarcinoma", "Squamous cell carcinoma", "Small cell carcinoma", "Neuroendocrine carcinoma"],
                answer: 1,
                explanation: "Squamous cell carcinoma is the most common histological type of cervical carcinoma."
              },
              {
                q: "A 65-year-old obese, diabetic, hypertensive woman presents with postmenopausal bleeding. Which of the following is a known risk factor for endometrial carcinoma?",
                options: ["Long-term use of oral contraceptives", "History of multiple pregnancies", "Prolonged estrogen exposure without progesterone", "Early menopause"],
                answer: 2,
                explanation: "Unopposed estrogen (no progesterone) is the central risk factor for endometrioid endometrial carcinoma. OCPs, multiparity, and early menopause are protective."
              },
              {
                q: "A 55-year-old woman presents with abdominal distension, vague pain, and ascites. Serum CA-125 is elevated. Which statement regarding ovarian cancer is true?",
                options: ["It is most commonly diagnosed in the early stages", "Most cases present with an elevated serum CA-125 level", "The risk is lower in women who have never been pregnant", "It is rarely associated with family history of breast cancer"],
                answer: 1,
                explanation: "Ovarian cancer usually presents late, and most cases show an elevated serum CA-125. Nulliparity increases risk, and it is linked to BRCA/breast cancer family history."
              },
              {
                q: "A 40-year-old woman undergoes a Pap smear which shows cervical intraepithelial neoplasia (CIN). Which grade of CIN is the most common precursor for invasive carcinoma of the cervix?",
                options: ["CIN I", "CIN II", "CIN III", "Endometrial hyperplasia"],
                answer: 2,
                explanation: "CIN III (high-grade dysplasia/carcinoma in situ) is the most likely to progress to invasive cervical carcinoma."
              },
              {
                q: "A 45-year-old woman presents with postmenopausal bleeding. Ultrasound shows a solid ovarian mass. Histology reveals a sex cord stromal tumor producing estrogen. The most likely diagnosis is:",
                options: ["Serous cystadenoma", "Granulosa cell tumor", "Mucinous cystadenoma", "Fibroma"],
                answer: 1,
                explanation: "Granulosa cell tumor is an estrogen-producing sex cord-stromal tumor that can cause postmenopausal bleeding (and endometrial hyperplasia)."
              },
              {
                q: "A 35-year-old woman presents with vaginal spotting and mucoid discharge. On speculum exam, a small red polypoid growth is seen protruding from the cervical canal. The most common benign cervical tumor is:",
                options: ["Endocervical polyp", "Squamous cell carcinoma", "Leiomyoma", "Cervical intraepithelial neoplasia"],
                answer: 0,
                explanation: "An endocervical polyp is the most common benign tumor of the cervix, presenting as a red polypoid growth from the canal."
              }
            ]
          },
          "breast": {
            name: "Breast",
            emoji: "🎗️",
            questions: [
              {
                q: "A 45-year-old woman presents with a strong family history of breast cancer. Genetic testing reveals a mutation associated with increased breast and ovarian cancer risk. Which chromosome is the BRCA1 gene located on?",
                options: ["Chromosome 13", "Chromosome 11", "Chromosome 17", "Chromosome 22"],
                answer: 2,
                explanation: "BRCA1 is on chromosome 17 (BRCA2 is on chromosome 13)."
              },
              {
                q: "A 38-year-old woman complains of a breast lump, with early menarche at age 10 and late menopause in her mother. She drinks coffee daily. Which of the following is not a risk factor for breast carcinoma?",
                options: ["Caffeine intake", "Early menstruation", "Family history", "Late menopause"],
                answer: 0,
                explanation: "Caffeine intake is not an established risk factor. Early menarche, late menopause, and family history all increase risk via prolonged estrogen exposure/genetics."
              },
              {
                q: "A 50-year-old female presents with a firm irregular breast mass. Biopsy reveals malignant cells forming duct-like structures infiltrating stroma. What is the most common type of breast carcinoma?",
                options: ["Intraductal (Invasive ductal) carcinoma", "Colloid carcinoma", "Lobular carcinoma", "None"],
                answer: 0,
                explanation: "Invasive ductal carcinoma (NST) is the most common type of breast cancer."
              },
              {
                q: "A 25-year-old woman presents with a well-circumscribed, mobile, rubbery lump in her breast. Histopathology shows proliferation of both stromal and glandular components. This lesion is best described as:",
                options: ["Benign", "Malignant", "Premalignant", "None of the above"],
                answer: 0,
                explanation: "A mobile, rubbery, well-circumscribed lump with stromal and glandular proliferation is a fibroadenoma — a benign lesion."
              },
              {
                q: "A 52-year-old postmenopausal woman presents with a mucin-secreting breast tumor showing slow growth and pushing margins. Which type of carcinoma has the best prognosis?",
                options: ["Mucinous carcinoma", "Medullary carcinoma", "Invasive ductal carcinoma", "Lobular carcinoma"],
                answer: 0,
                explanation: "Mucinous (colloid) carcinoma is slow-growing with pushing margins and has the best prognosis among these."
              },
              {
                q: "A biopsy specimen from a breast carcinoma is tested for estrogen receptor (ER), progesterone receptor (PR), and HER2/neu expression to guide therapy. This molecular classification is based on:",
                options: ["ER, PR and HER2/neu", "Gene profiling", "Histology", "Mutations"],
                answer: 0,
                explanation: "Routine molecular classification of breast cancer is based on ER, PR, and HER2/neu status, which guides therapy."
              },
              {
                q: "A 55-year-old woman develops a bluish-purple swelling on her arm several years after a mastectomy with axillary lymph node dissection. What is the most common site for lymphangiosarcoma?",
                options: ["Post mastectomy arm", "Liver", "Spleen", "Retroperitoneum"],
                answer: 0,
                explanation: "Chronic lymphedema after mastectomy (Stewart-Treves syndrome) predisposes to lymphangiosarcoma of the ipsilateral arm."
              },
              {
                q: "A 60-year-old woman presents with eczema-like changes over the nipple and areola. Microscopy shows large malignant cells with pale-staining cytoplasm within the epidermis. The characteristic feature of Paget's disease is:",
                options: ["Abundant clear cytoplasm", "Eosinophilic cytoplasm", "Glycogen mass", "Multinucleated giant cell"],
                answer: 0,
                explanation: "Paget cells are large malignant cells with abundant pale/clear cytoplasm scattered within the nipple epidermis."
              },
              {
                q: "A breast biopsy from a woman with fibrocystic change shows focal proliferation of atypical epithelial cells. Which lesion carries an increased risk of carcinoma?",
                options: ["Atypical epithelial hyperplasia", "Sclerosing adenosis", "Cystic change", "Apocrine metaplasia"],
                answer: 0,
                explanation: "Atypical (ductal/lobular) hyperplasia carries a significantly increased risk of subsequent carcinoma; the others are non-proliferative or carry minimal risk."
              },
              {
                q: "A 48-year-old woman presents with a breast tumor. Microscopy shows small, uniform tumor cells arranged in a single-file pattern infiltrating fibrous stroma. This histologic appearance is characteristic of:",
                options: ["Infiltrating lobular carcinoma", "Pleomorphic cells in sheets", "Cribriform pattern", "Pinwheel pattern"],
                answer: 0,
                explanation: "Single-file (Indian-file) infiltration by small uniform cells, due to loss of E-cadherin, is characteristic of invasive lobular carcinoma."
              }
            ]
          },
          "endocrine": {
            name: "Endocrine System",
            emoji: "🦋",
            questions: [
              {
                q: "A 45-year-old woman presents with a thyroid nodule. FNAC shows polygonal cells in nests with amyloid stroma and markedly elevated peptide hormone levels. The tumor is associated with increased levels of:",
                options: ["Thyroglobulin", "T3", "T4", "Calcitonin"],
                answer: 3,
                explanation: "Nests of cells with amyloid stroma = medullary carcinoma of thyroid (parafollicular C cells), which secretes calcitonin."
              },
              {
                q: "A 55-year-old man has a large thyroid swelling that extends behind the sternum into the mediastinum and moves with deglutition. This condition is called:",
                options: ["Solitary nodule", "Colloid goiter", "Retrosternal goiter", "Medullary carcinoma"],
                answer: 2,
                explanation: "A goiter extending behind the sternum into the mediastinum is a retrosternal goiter."
              },
              {
                q: "A 40-year-old male presents with recurrent peptic ulcers, hypercalcemia, and features of Cushing's syndrome, with a positive family history of endocrine tumors. MEN type 1 includes tumors of all except:",
                options: ["Parathyroid", "Pituitary", "Pancreas", "Medullary carcinoma of thyroid"],
                answer: 3,
                explanation: "MEN 1 = parathyroid, pituitary, and pancreas (the 3 Ps). Medullary thyroid carcinoma belongs to MEN 2."
              },
              {
                q: "A 25-year-old woman with chronic renal disease develops osteomalacia. Labs show low calcium and phosphate with decreased activation of vitamin D. The active form of Vitamin D is:",
                options: ["1,25 (OH)2 Vitamin D3", "25 OH Vitamin D3", "Vitamin D3", "Vitamin D2"],
                answer: 0,
                explanation: "The active form is 1,25-dihydroxyvitamin D3 (calcitriol); its final hydroxylation occurs in the kidney, which fails in renal disease."
              },
              {
                q: "A 42-year-old female presents with a thyroid nodule. FNAC reveals follicular cells but cannot distinguish between adenoma and carcinoma. FNAC is least diagnostic in:",
                options: ["Anaplastic", "Papillary", "Follicular", "Thyroiditis"],
                answer: 2,
                explanation: "FNAC cannot distinguish follicular adenoma from follicular carcinoma (which needs capsular/vascular invasion), so it is least diagnostic for follicular lesions."
              },
              {
                q: "A 30-year-old woman presents with a thyroid swelling. Cytology shows papillary structures with cells having clear, empty-appearing nuclei and nuclear grooves. Orphan Annie nuclei are characteristic of:",
                options: ["Papillary carcinoma of thyroid", "Paraganglioma", "Meningioma", "Pituitary carcinoma"],
                answer: 0,
                explanation: "Orphan Annie eye nuclei and nuclear grooves are diagnostic features of papillary thyroid carcinoma."
              },
              {
                q: "A patient presents with excessive thirst and polyuria due to decreased secretion of a hormone from the posterior pituitary. The posterior pituitary secretes:",
                options: ["GH", "TSH", "ADH", "FSH"],
                answer: 2,
                explanation: "The posterior pituitary stores/releases ADH and oxytocin; ADH deficiency causes diabetes insipidus (polyuria, polydipsia)."
              },
              {
                q: "A 40-year-old man presents with episodic headache, sweating, and palpitations, persistently elevated blood pressure, and increased urinary catecholamines. The tumor that follows the rule of 10 is:",
                options: ["Lymphoma", "Oncocytoma", "Pheochromocytoma", "Paraganglioma"],
                answer: 2,
                explanation: "Pheochromocytoma classically follows the rule of 10s (10% bilateral, extra-adrenal, malignant, familial, etc.) and secretes catecholamines."
              },
              {
                q: "A diabetic patient is monitored for long-term glycemic control; the test reflects average blood glucose over the past 3 months. Which hemoglobin fraction is used to measure glycemic control?",
                options: ["HbA", "HbS", "HbA2", "HbA1C"],
                answer: 3,
                explanation: "HbA1c (glycated hemoglobin) reflects average glycemia over roughly the preceding 3 months."
              },
              {
                q: "A patient with type 2 diabetes shows elevated levels of amylin, a peptide that modulates insulin and satiety. Amylin is secreted by:",
                options: ["Alpha cells", "Beta cells", "D cells", "PP cells"],
                answer: 1,
                explanation: "Amylin is co-secreted with insulin by the pancreatic beta cells."
              }
            ]
          },
          "bone-soft-tissue": {
            name: "Bone & Soft Tissue",
            emoji: "🦴",
            questions: [
              {
                q: "A 17-year-old male presents with nocturnal pain in the bone of his left leg, quickly relieved by aspirin. X-rays reveal a round, radiolucent area with central mineralization surrounded by thickened bone, measuring approximately 1.2 cm. What is the correct diagnosis?",
                options: ["Chondroma", "Osteoma", "Osteoblastoma", "Osteoid osteoma"],
                answer: 3,
                explanation: "A small (<2 cm) painful nidus relieved by aspirin (NSAIDs) with surrounding reactive sclerosis is classic osteoid osteoma. Osteoblastoma is larger (>2 cm) and not relieved by aspirin."
              },
              {
                q: "An 11-year-old boy presents with an enlarging, painful lesion in the medullary cavity of his left femur. X-rays reveal an irregular, destructive lesion with an onion-skin periosteal reaction. Histology shows sheets of uniform small, round, blue cells. What is the correct diagnosis?",
                options: ["Chondroblastoma", "Ewing's sarcoma", "Fibrosarcoma", "Osteoblastoma"],
                answer: 1,
                explanation: "Onion-skin periosteal reaction with sheets of small round blue cells in a child = Ewing's sarcoma (t(11;22))."
              },
              {
                q: "A 4-year-old boy presents with numerous fractures unrelated to excessive trauma, loose joints, decreased hearing, and blue sclerae. X-rays reveal markedly thinned bones. What is the correct diagnosis?",
                options: ["Osteopetrosis", "Osteoporosis", "Osteomalacia", "Osteogenesis imperfecta"],
                answer: 3,
                explanation: "Fragile bones, blue sclerae, hearing loss, and joint laxity from a type I collagen defect = osteogenesis imperfecta."
              },
              {
                q: "A 71-year-old female presents with sudden severe lower back pain, severe kyphosis, and an X-ray showing a lumbar vertebral compression fracture with marked thinning of the bones. Serum calcium, phosphorus, alkaline phosphatase, and PTH are all normal. This woman's bone changes are most likely due to:",
                options: ["Osteopetrosis", "Osteoporosis", "Osteomalacia", "Osteitis fibrosa cystica"],
                answer: 1,
                explanation: "Postmenopausal vertebral compression fractures with normal biochemistry are characteristic of osteoporosis."
              },
              {
                q: "A 65-year-old man presents with bone pain and bowing of long bones. Histology shows prominent osteoid seams, very large osteoclasts with more than 12 hyperchromatic nuclei, and viral-type inclusion particles. Which is the most characteristic diagnosis?",
                options: ["Paget's disease", "Gaucher's disease", "Fibrous dysplasia", "Giant cell tumor of bone"],
                answer: 0,
                explanation: "Giant, hyperchromatic osteoclasts with viral-like inclusions and a mosaic bone pattern characterize Paget's disease of bone."
              },
              {
                q: "A 12-year-old boy develops fever, pain, and swelling of the leg. Radiographs suggest acute hematogenous osteomyelitis. Which part of a long bone is usually involved first?",
                options: ["Metaphyseal region", "Diaphysis", "Epiphysis", "Area around the entrance of the nutrient artery"],
                answer: 0,
                explanation: "In children, the metaphysis is involved first because its sluggish vascular loops favour bacterial seeding."
              },
              {
                q: "A patient with chronic bone infection develops necrotic fragments of dead bone that separate from viable bone. This fragment (sequestrum) is most classically seen in:",
                options: ["Paget's disease of bone", "Osteomyelitis", "Osteoclastoma", "Aneurysmal bone cyst"],
                answer: 1,
                explanation: "A sequestrum (dead bone) — often surrounded by an involucrum of new bone — is characteristic of chronic osteomyelitis."
              },
              {
                q: "A 19-year-old male presents with swelling of the distal femur. Histopathology reveals malignant osteoblasts directly producing osteoid. Which tumor shows osteoid formation?",
                options: ["Enchondroma", "Osteogenic sarcoma", "Osteoclastoma", "Paget disease of bone"],
                answer: 1,
                explanation: "Production of osteoid directly by malignant osteoblasts defines osteogenic sarcoma (osteosarcoma)."
              },
              {
                q: "A 14-year-old boy presents with pain and swelling in the shaft of the femur. Biopsy shows small round blue cells, and the tumor arises from the diaphysis. Which tumor is most likely?",
                options: ["Osteogenic sarcoma", "Chondrosarcoma", "Giant cell tumor", "Ewing sarcoma"],
                answer: 3,
                explanation: "A diaphyseal small round blue cell tumor in a child is Ewing sarcoma (osteosarcoma usually arises in the metaphysis)."
              },
              {
                q: "A 68-year-old man presents with a rapidly growing, firm mass on his right leg. Biopsy reveals poorly differentiated cells with pleomorphic nuclei, high N/C ratio, extensive muscle invasion, no capsule, and a high mitotic rate with abnormal mitoses. Which is the most likely diagnosis?",
                options: ["Lipoma", "Squamous papilloma", "Osteosarcoma", "Benign adenoma"],
                answer: 2,
                explanation: "Pleomorphism, invasion, lack of capsule, and abnormal mitoses indicate a high-grade malignancy — osteosarcoma among the options."
              },
              {
                q: "A 10-year-old child presents with a tibial mass. Pathological examination reveals a small blue round cell tumor. Which molecular finding is most likely to be present?",
                options: ["22q translocation", "11q deletion", "7p translocation", "n-MYC amplification"],
                answer: 0,
                explanation: "Ewing sarcoma (small round blue cell tumor of bone) carries the t(11;22)(q24;q12) EWSR1-FLI1 translocation."
              }
            ]
          },
          "cns": {
            name: "Central Nervous System",
            emoji: "🧠",
            questions: [
              {
                q: "A 25-year-old woman undergoes a lumbar puncture for evaluation of suspected meningitis. Two hours later, she complains of a severe headache that worsens when sitting or standing and is relieved when lying down. What is the most likely complication in this patient?",
                options: ["Infection", "Backache", "Headache", "Medullary herniation"],
                answer: 2,
                explanation: "A postural headache (worse upright, relieved lying down) after LP is a post-dural puncture headache from CSF leakage."
              },
              {
                q: "A 6-year-old child was admitted with giddiness, acute headache and vomiting of one day's duration. On examination there was neck rigidity. CSF shows raised pressure, raised proteins and reduced glucose. The probable diagnosis is:",
                options: ["Acute pyogenic meningitis", "Acute viral meningitis", "Brain abscess", "Tubercular meningitis"],
                answer: 0,
                explanation: "Acute onset with raised pressure, high protein, and low glucose indicates acute pyogenic (bacterial) meningitis. The very short (1-day) course argues against the more indolent tubercular meningitis."
              }
            ]
          }
        }
      }
    }
  },

  pharma: {
    name: "Pharmacology",
    emoji: "💊",
    enabled: false,
    papers: {}
  }
};
