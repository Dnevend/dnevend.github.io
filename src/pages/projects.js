import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { projects } from "@site/src/data/projects";
import styles from "./projects.module.css";

const statusLabels = {
  active: "活跃",
  ended: "结束",
};

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 3.5 12.5 12.5M12.5 3.5 3.5 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon({ direction = "right" }) {
  const d = direction === "left" ? "M14.5 5 8.5 12l6 7" : "M9.5 5l6 7-6 7";

  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={d}
        stroke="rgba(0, 0, 0, 0.45)"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkArrowIcon({ external }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="15"
      height="15"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={
          external
            ? "M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
            : "M3.5 8h9M8.5 4l4 4-4 4"
        }
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectImageMeta({ project }) {
  const isActive = project.status === "active";

  return (
    <div className={styles.imageMeta}>
      <span
        className={clsx(
          styles.imageStatus,
          isActive && styles.imageStatusActive,
        )}
      >
        <span className={styles.statusDot} aria-hidden="true" />
        {statusLabels[project.status] ?? project.status}
      </span>
      <span className={styles.imageYear}>{project.year}</span>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = React.useState(null);
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const [dialogOrigin, setDialogOrigin] = React.useState(null);
  const dialogRef = React.useRef(null);
  const triggerRef = React.useRef(null);

  const years = projects
    .map((project) => Number(project.year))
    .filter((year) => Number.isFinite(year));
  const yearRange = years.length
    ? `${Math.min(...years)} — ${Math.max(...years)}`
    : "";

  const galleryImages = activeProject
    ? activeProject.gallery?.length
      ? activeProject.gallery
      : [{ src: activeProject.image, alt: activeProject.imageAlt }]
    : [];
  const currentImage = galleryImages[activeImageIndex] ?? galleryImages[0];
  const isExternalLink = activeProject?.href?.startsWith("http") ?? false;

  React.useEffect(() => {
    if (!activeProject) return undefined;

    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  const openProject = (project, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const dialogWidth =
      window.innerWidth > 560
        ? Math.min(760, window.innerWidth - 32)
        : window.innerWidth - 16;

    setDialogOrigin({
      x: rect.left + rect.width / 2 - window.innerWidth / 2,
      y: rect.top + rect.height / 2 - window.innerHeight / 2,
      scale: Math.max(0.15, Math.min(0.95, rect.width / dialogWidth)),
    });
    setActiveImageIndex(0);
    triggerRef.current = event.currentTarget;
    setActiveProject(project);
  };

  const closeProject = () => {
    dialogRef.current?.close();
  };

  const handleDialogClose = () => {
    setActiveProject(null);
    triggerRef.current?.focus();
  };

  const handleDialogClick = (event) => {
    if (event.target === event.currentTarget) closeProject();
  };

  const showImage = (index) => {
    if (!galleryImages.length) return;
    setActiveImageIndex(
      (index + galleryImages.length) % galleryImages.length,
    );
  };

  const handleDialogKeyDown = (event) => {
    if (galleryImages.length < 2) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showImage(activeImageIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showImage(activeImageIndex + 1);
    }
  };

  return (
    <Layout title="项目" description="Dnevend 正在做或做过的项目">
      <main className={styles.page}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.headerTop}>
              <span className={styles.eyebrow}>PROJECTS</span>
              <span className={styles.count}>
                {String(projects.length).padStart(2, "0")} PROJECTS
                {yearRange && ` · ${yearRange}`}
              </span>
            </div>
            <h1 className={styles.title} data-serif="true">
              项目
            </h1>
            <p className={styles.lead}>
              一些正在实现的突发奇想，或者已经不再折腾的东西。
            </p>
          </header>

          {projects.length === 0 ? (
            <div className={styles.empty}>项目整理中。</div>
          ) : (
            <div className={styles.list}>
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={clsx(
                    styles.project,
                    activeProject === project && styles.projectActive,
                  )}
                >
                  <button
                    type="button"
                    className={styles.cardButton}
                    aria-label={`查看项目详情：${project.title}`}
                    aria-haspopup="dialog"
                    aria-expanded={activeProject === project}
                    onClick={(event) => openProject(project, event)}
                  />

                  <div className={styles.projectCard}>
                    <div className={styles.media}>
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <span className={styles.index}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <ProjectImageMeta project={project} />
                    </div>

                    <div className={styles.body}>
                      <h2 className={styles.projectTitle} data-serif="true">
                        {project.title}
                      </h2>
                      <p className={styles.description}>{project.description}</p>

                      {project.tags?.length > 0 && (
                        <div className={styles.tags}>
                          {project.tags.map((tag) => (
                            <span key={tag} className={styles.tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {activeProject && (
          <dialog
            ref={dialogRef}
            className={styles.dialog}
            aria-labelledby="project-dialog-title"
            style={
              dialogOrigin
                ? {
                    "--dialog-from-x": `${dialogOrigin.x}px`,
                    "--dialog-from-y": `${dialogOrigin.y}px`,
                    "--dialog-from-scale": `${dialogOrigin.scale}`,
                  }
                : undefined
            }
            onClick={handleDialogClick}
            onClose={handleDialogClose}
            onKeyDown={handleDialogKeyDown}
          >
            <button
              type="button"
              className={styles.dialogClose}
              aria-label="关闭项目详情"
              onClick={closeProject}
              autoFocus
            >
              <CloseIcon />
            </button>

            <div className={styles.dialogScroll}>
              <div className={styles.dialogMedia}>
                <img
                  key={currentImage.src}
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className={styles.dialogImage}
                />
                <ProjectImageMeta project={activeProject} />

                {galleryImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      className={clsx(
                        styles.carouselButton,
                        styles.carouselPrevious,
                      )}
                      aria-label="上一张图片"
                      onClick={() => showImage(activeImageIndex - 1)}
                    >
                      <ChevronIcon direction="left" />
                    </button>
                    <button
                      type="button"
                      className={clsx(
                        styles.carouselButton,
                        styles.carouselNext,
                      )}
                      aria-label="下一张图片"
                      onClick={() => showImage(activeImageIndex + 1)}
                    >
                      <ChevronIcon direction="right" />
                    </button>
                    <div
                      className={styles.carouselDots}
                      role="group"
                      aria-label="切换项目图片"
                    >
                      {galleryImages.map((image, imageIndex) => (
                        <button
                          key={image.src}
                          type="button"
                          className={clsx(
                            styles.carouselDot,
                            imageIndex === activeImageIndex &&
                              styles.carouselDotActive,
                          )}
                          aria-label={`查看第 ${imageIndex + 1} 张图片`}
                          aria-current={
                            imageIndex === activeImageIndex
                              ? "true"
                              : undefined
                          }
                          onClick={() => setActiveImageIndex(imageIndex)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className={styles.dialogBody}>
                <div className={styles.dialogHeader}>
                  <h2
                    id="project-dialog-title"
                    className={styles.dialogTitle}
                    data-serif="true"
                  >
                    {activeProject.title}
                  </h2>

                  <Link
                    to={activeProject.href}
                    className={styles.dialogLink}
                    data-external={isExternalLink || undefined}
                    aria-label={
                      isExternalLink ? "访问项目（在新窗口打开）" : "访问项目"
                    }
                    {...(isExternalLink
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    <span>访问项目</span>
                    <LinkArrowIcon external={isExternalLink} />
                  </Link>
                </div>

                <p className={styles.dialogDescription}>
                  {activeProject.description}
                </p>

                {activeProject.tags?.length > 0 && (
                  <div className={styles.tags}>
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </dialog>
        )}
      </main>
    </Layout>
  );
}
