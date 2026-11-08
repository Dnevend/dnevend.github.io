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
  const dialogRef = React.useRef(null);
  const triggerRef = React.useRef(null);

  const years = projects
    .map((project) => Number(project.year))
    .filter((year) => Number.isFinite(year));
  const yearRange = years.length
    ? `${Math.min(...years)} — ${Math.max(...years)}`
    : "";

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
            <h1 className={styles.title}>项目</h1>
            <p className={styles.lead}>
              一些正在做、已经做完，或者还在折腾的东西。
            </p>
          </header>

          {projects.length === 0 ? (
            <div className={styles.empty}>项目整理中。</div>
          ) : (
            <div className={styles.list}>
              {projects.map((project, index) => (
                <article key={project.title} className={styles.project}>
                  <button
                    type="button"
                    className={styles.cardButton}
                    aria-label={`查看项目详情：${project.title}`}
                    aria-haspopup="dialog"
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
                      <h2 className={styles.projectTitle}>{project.title}</h2>
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
            onClick={handleDialogClick}
            onClose={handleDialogClose}
          >
            <button
              type="button"
              className={styles.dialogClose}
              aria-label="关闭项目详情"
              onClick={closeProject}
              autoFocus
            >
              ×
            </button>

            <div className={styles.dialogScroll}>
              <div className={styles.dialogMedia}>
                <img
                  src={activeProject.image}
                  alt={activeProject.imageAlt}
                />
                <ProjectImageMeta project={activeProject} />
              </div>

              <div className={styles.dialogBody}>
                <h2 id="project-dialog-title" className={styles.dialogTitle}>
                  {activeProject.title}
                </h2>
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

                <Link
                  to={activeProject.href}
                  className={styles.dialogLink}
                  {...(activeProject.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  访问项目
                  <span aria-hidden="true">
                    {activeProject.href.startsWith("http") ? "↗" : "→"}
                  </span>
                </Link>
              </div>
            </div>
          </dialog>
        )}
      </main>
    </Layout>
  );
}
