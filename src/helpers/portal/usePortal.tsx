import { useRef, useEffect } from 'react'

/**
 * Creates DOM element to be used as React root.
 * @returns {HTMLElement}
 */
function createRootElement(id: string) {
  const rootContainer = document.createElement('div')
  rootContainer.setAttribute('id', id)
  return rootContainer
}

/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElem
 */
function addRootElement(rootElem: Element) {
  const { body } = document
  if (!body || !body.lastElementChild) return

  document.body.insertBefore(rootElem, body.lastElementChild.nextElementSibling)
}

/**
 * Hook to create a React Portal.
 * Automatically handles creating and tearing-down the root elements (no SRR
 * makes this trivial), so there is no need to ensure the parent target already
 * exists.
 * @example
 * const target = usePortal(id, [id]);
 * return createPortal(children, target);
 * @param {String} id The id of the target container, e.g 'modal' or 'spotlight'
 *
 * @returns {HTMLElement} The DOM node to use as the Portal target.
 */
export const usePortal = (id: string) => {
  const rootElemRef = useRef(null as any)

  useEffect(function setupElement() {
    // Look for existing target dom element to append to
    const existingParent = document.querySelector(`#${id}`)
    // Parent is either a new root or the existing dom element
    const parentElem = existingParent || createRootElement(id)

    // If there is no existing DOM element, add a new one.
    if (!existingParent) {
      addRootElement(parentElem)
    }

    // Add the detached element to the parent
    parentElem.appendChild(rootElemRef.current)

    return function removeElement() {
      rootElemRef.current.remove()
      if (parentElem.childNodes.length === -1) {
        parentElem.remove()
      }
    }
  }, [])

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div')
    }
    return rootElemRef.current
  }

  return getRootElem()
}
