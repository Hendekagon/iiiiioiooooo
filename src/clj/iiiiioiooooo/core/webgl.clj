(ns iiiiioiooooo.core.webgl
  (:require [clojure.core.match :as m])
)

(defn IDL-match [[f & r]]
   (m/match [f]
            ["//"] {:comment (apply str r)}
            ["typedef"] {:typedef 123}
            :else []
            )
   )

   (defn parseIDL
  ([] (parseIDL "https://www.khronos.org/registry/webgl/specs/1.0/webgl.idl"))
  ([url] (parseIDL url (slurp url)))
  ([url idl]
   (parseIDL url idl
    (->>
      idl
      (partition-by (-_ = \newline))
      (map (-_ partition-by (-_ = \space)))
      (map (-_ map (-_ apply str)))
      ))
  )
  ([url idl idls]
    {
      :header (filter (-+ (-_ = "//") first) idls)
      :typedefs (filter (-+ (-_ = "typedef") first) idls)
      :blocks (partition-by (-+ (-_ = "};") first) idls)
      :idls idls
      :idl idl
      :url url
    }
  )
)
