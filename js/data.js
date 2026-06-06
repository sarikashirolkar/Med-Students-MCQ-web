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
            questions: []
          },
          "cvs-blood": {
            name: "CVS & Blood",
            emoji: "🫀",
            questions: []
          },
          "git-hepatobiliary": {
            name: "GIT & Hepatobiliary",
            emoji: "🩺",
            questions: []
          },
          "skin-soft-tissue": {
            name: "Skin & Soft Tissue",
            emoji: "🧫",
            questions: []
          }
        }
      },
      paper2: {
        name: "Paper 2",
        enabled: false,
        chapters: {}
      }
    }
  },

  patho: {
    name: "Pathology",
    emoji: "🧪",
    enabled: false,
    papers: {}
  },

  pharma: {
    name: "Pharmacology",
    emoji: "💊",
    enabled: false,
    papers: {}
  }
};
